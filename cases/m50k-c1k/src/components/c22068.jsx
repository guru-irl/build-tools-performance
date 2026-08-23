import React from 'react';
const LABEL_22068 = 'component_22068';
export function Component22068({ value = 22068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22068, 'data-value': derived.doubled }, children);
}
export default Component22068;
