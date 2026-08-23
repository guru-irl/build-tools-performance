import React from 'react';
const LABEL_42339 = 'component_42339';
export function Component42339({ value = 42339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42339, 'data-value': derived.doubled }, children);
}
export default Component42339;
