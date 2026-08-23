import React from 'react';
const LABEL_39976 = 'component_39976';
export function Component39976({ value = 39976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39976, 'data-value': derived.doubled }, children);
}
export default Component39976;
