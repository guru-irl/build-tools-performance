import React from 'react';
const LABEL_26014 = 'component_26014';
export function Component26014({ value = 26014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26014, 'data-value': derived.doubled }, children);
}
export default Component26014;
