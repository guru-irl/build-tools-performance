import React from 'react';
const LABEL_39023 = 'component_39023';
export function Component39023({ value = 39023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39023, 'data-value': derived.doubled }, children);
}
export default Component39023;
