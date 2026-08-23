import React from 'react';
const LABEL_42221 = 'component_42221';
export function Component42221({ value = 42221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42221, 'data-value': derived.doubled }, children);
}
export default Component42221;
