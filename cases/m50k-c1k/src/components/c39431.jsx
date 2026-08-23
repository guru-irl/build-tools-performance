import React from 'react';
const LABEL_39431 = 'component_39431';
export function Component39431({ value = 39431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39431, 'data-value': derived.doubled }, children);
}
export default Component39431;
