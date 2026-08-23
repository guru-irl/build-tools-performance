import React from 'react';
const LABEL_10033 = 'component_10033';
export function Component10033({ value = 10033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10033, 'data-value': derived.doubled }, children);
}
export default Component10033;
