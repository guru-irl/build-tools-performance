import React from 'react';
const LABEL_39781 = 'component_39781';
export function Component39781({ value = 39781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39781, 'data-value': derived.doubled }, children);
}
export default Component39781;
