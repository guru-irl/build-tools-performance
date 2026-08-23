import React from 'react';
const LABEL_5406 = 'component_5406';
export function Component5406({ value = 5406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5406, 'data-value': derived.doubled }, children);
}
export default Component5406;
