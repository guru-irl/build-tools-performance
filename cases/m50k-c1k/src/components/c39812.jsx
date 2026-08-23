import React from 'react';
const LABEL_39812 = 'component_39812';
export function Component39812({ value = 39812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39812, 'data-value': derived.doubled }, children);
}
export default Component39812;
