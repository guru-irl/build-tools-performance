import React from 'react';
const LABEL_41027 = 'component_41027';
export function Component41027({ value = 41027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41027, 'data-value': derived.doubled }, children);
}
export default Component41027;
