import React from 'react';
const LABEL_39834 = 'component_39834';
export function Component39834({ value = 39834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39834, 'data-value': derived.doubled }, children);
}
export default Component39834;
