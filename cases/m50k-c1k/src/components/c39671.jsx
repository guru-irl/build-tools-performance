import React from 'react';
const LABEL_39671 = 'component_39671';
export function Component39671({ value = 39671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39671, 'data-value': derived.doubled }, children);
}
export default Component39671;
