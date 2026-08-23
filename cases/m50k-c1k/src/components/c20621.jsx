import React from 'react';
const LABEL_20621 = 'component_20621';
export function Component20621({ value = 20621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20621, 'data-value': derived.doubled }, children);
}
export default Component20621;
