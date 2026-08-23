import React from 'react';
const LABEL_39957 = 'component_39957';
export function Component39957({ value = 39957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39957, 'data-value': derived.doubled }, children);
}
export default Component39957;
