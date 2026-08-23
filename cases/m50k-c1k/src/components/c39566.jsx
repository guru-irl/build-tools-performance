import React from 'react';
const LABEL_39566 = 'component_39566';
export function Component39566({ value = 39566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39566, 'data-value': derived.doubled }, children);
}
export default Component39566;
