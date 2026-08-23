import React from 'react';
const LABEL_41063 = 'component_41063';
export function Component41063({ value = 41063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41063, 'data-value': derived.doubled }, children);
}
export default Component41063;
