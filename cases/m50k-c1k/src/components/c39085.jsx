import React from 'react';
const LABEL_39085 = 'component_39085';
export function Component39085({ value = 39085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39085, 'data-value': derived.doubled }, children);
}
export default Component39085;
