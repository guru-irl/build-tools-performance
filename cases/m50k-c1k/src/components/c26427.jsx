import React from 'react';
const LABEL_26427 = 'component_26427';
export function Component26427({ value = 26427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26427, 'data-value': derived.doubled }, children);
}
export default Component26427;
