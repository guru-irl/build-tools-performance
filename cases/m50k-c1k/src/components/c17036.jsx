import React from 'react';
const LABEL_17036 = 'component_17036';
export function Component17036({ value = 17036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17036, 'data-value': derived.doubled }, children);
}
export default Component17036;
