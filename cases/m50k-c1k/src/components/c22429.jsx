import React from 'react';
const LABEL_22429 = 'component_22429';
export function Component22429({ value = 22429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22429, 'data-value': derived.doubled }, children);
}
export default Component22429;
