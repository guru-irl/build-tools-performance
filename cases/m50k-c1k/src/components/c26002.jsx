import React from 'react';
const LABEL_26002 = 'component_26002';
export function Component26002({ value = 26002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26002, 'data-value': derived.doubled }, children);
}
export default Component26002;
