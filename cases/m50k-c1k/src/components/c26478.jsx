import React from 'react';
const LABEL_26478 = 'component_26478';
export function Component26478({ value = 26478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26478, 'data-value': derived.doubled }, children);
}
export default Component26478;
