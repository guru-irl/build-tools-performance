import React from 'react';
const LABEL_17832 = 'component_17832';
export function Component17832({ value = 17832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17832, 'data-value': derived.doubled }, children);
}
export default Component17832;
