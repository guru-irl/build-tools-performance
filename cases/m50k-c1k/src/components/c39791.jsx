import React from 'react';
const LABEL_39791 = 'component_39791';
export function Component39791({ value = 39791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39791, 'data-value': derived.doubled }, children);
}
export default Component39791;
