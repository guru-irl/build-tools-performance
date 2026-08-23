import React from 'react';
const LABEL_39769 = 'component_39769';
export function Component39769({ value = 39769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39769, 'data-value': derived.doubled }, children);
}
export default Component39769;
