import React from 'react';
const LABEL_23936 = 'component_23936';
export function Component23936({ value = 23936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23936, 'data-value': derived.doubled }, children);
}
export default Component23936;
