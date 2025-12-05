export interface Board {
  id: number;
  name: string;
  status: 'ACTIVE' | 'CLOSED' | 'DELETED';
  created_at: number;
  updated_at: number;
}

export interface TrashBoard extends Board {
  status: 'DELETED';
}
