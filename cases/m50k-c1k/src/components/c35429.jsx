import React from 'react';
const LABEL_35429 = 'component_35429';
export function Component35429({ value = 35429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35429, 'data-value': derived.doubled }, children);
}
export default Component35429;
