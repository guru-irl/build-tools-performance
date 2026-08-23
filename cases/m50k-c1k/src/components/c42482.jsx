import React from 'react';
const LABEL_42482 = 'component_42482';
export function Component42482({ value = 42482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42482, 'data-value': derived.doubled }, children);
}
export default Component42482;
