import React from 'react';
const LABEL_42405 = 'component_42405';
export function Component42405({ value = 42405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42405, 'data-value': derived.doubled }, children);
}
export default Component42405;
