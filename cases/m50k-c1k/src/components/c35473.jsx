import React from 'react';
const LABEL_35473 = 'component_35473';
export function Component35473({ value = 35473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35473, 'data-value': derived.doubled }, children);
}
export default Component35473;
