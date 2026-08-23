import React from 'react';
const LABEL_23429 = 'component_23429';
export function Component23429({ value = 23429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23429, 'data-value': derived.doubled }, children);
}
export default Component23429;
