import React from 'react';
const LABEL_42838 = 'component_42838';
export function Component42838({ value = 42838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42838, 'data-value': derived.doubled }, children);
}
export default Component42838;
