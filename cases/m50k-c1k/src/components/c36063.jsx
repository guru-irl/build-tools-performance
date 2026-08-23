import React from 'react';
const LABEL_36063 = 'component_36063';
export function Component36063({ value = 36063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36063, 'data-value': derived.doubled }, children);
}
export default Component36063;
