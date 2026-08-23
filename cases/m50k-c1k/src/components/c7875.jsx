import React from 'react';
const LABEL_7875 = 'component_7875';
export function Component7875({ value = 7875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7875, 'data-value': derived.doubled }, children);
}
export default Component7875;
