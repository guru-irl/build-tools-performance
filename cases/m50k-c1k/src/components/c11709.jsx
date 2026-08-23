import React from 'react';
const LABEL_11709 = 'component_11709';
export function Component11709({ value = 11709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11709, 'data-value': derived.doubled }, children);
}
export default Component11709;
