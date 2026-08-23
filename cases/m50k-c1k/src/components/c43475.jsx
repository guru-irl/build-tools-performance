import React from 'react';
const LABEL_43475 = 'component_43475';
export function Component43475({ value = 43475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43475, 'data-value': derived.doubled }, children);
}
export default Component43475;
