import React from 'react';
const LABEL_39953 = 'component_39953';
export function Component39953({ value = 39953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39953, 'data-value': derived.doubled }, children);
}
export default Component39953;
