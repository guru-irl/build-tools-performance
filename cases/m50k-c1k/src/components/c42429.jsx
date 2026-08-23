import React from 'react';
const LABEL_42429 = 'component_42429';
export function Component42429({ value = 42429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42429, 'data-value': derived.doubled }, children);
}
export default Component42429;
