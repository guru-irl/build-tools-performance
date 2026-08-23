import React from 'react';
const LABEL_17995 = 'component_17995';
export function Component17995({ value = 17995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17995, 'data-value': derived.doubled }, children);
}
export default Component17995;
