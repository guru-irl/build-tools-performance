import React from 'react';
const LABEL_20942 = 'component_20942';
export function Component20942({ value = 20942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20942, 'data-value': derived.doubled }, children);
}
export default Component20942;
