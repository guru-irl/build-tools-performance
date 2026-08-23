import React from 'react';
const LABEL_20666 = 'component_20666';
export function Component20666({ value = 20666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20666, 'data-value': derived.doubled }, children);
}
export default Component20666;
