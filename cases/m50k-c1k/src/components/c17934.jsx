import React from 'react';
const LABEL_17934 = 'component_17934';
export function Component17934({ value = 17934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17934, 'data-value': derived.doubled }, children);
}
export default Component17934;
