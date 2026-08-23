import React from 'react';
const LABEL_31863 = 'component_31863';
export function Component31863({ value = 31863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31863, 'data-value': derived.doubled }, children);
}
export default Component31863;
