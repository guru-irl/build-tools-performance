import React from 'react';
const LABEL_22185 = 'component_22185';
export function Component22185({ value = 22185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22185, 'data-value': derived.doubled }, children);
}
export default Component22185;
