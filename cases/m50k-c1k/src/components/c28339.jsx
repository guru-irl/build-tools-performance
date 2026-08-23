import React from 'react';
const LABEL_28339 = 'component_28339';
export function Component28339({ value = 28339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28339, 'data-value': derived.doubled }, children);
}
export default Component28339;
