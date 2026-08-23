import React from 'react';
const LABEL_17793 = 'component_17793';
export function Component17793({ value = 17793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17793, 'data-value': derived.doubled }, children);
}
export default Component17793;
