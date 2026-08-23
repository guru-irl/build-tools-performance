import React from 'react';
const LABEL_38328 = 'component_38328';
export function Component38328({ value = 38328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38328, 'data-value': derived.doubled }, children);
}
export default Component38328;
