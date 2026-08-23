import React from 'react';
const LABEL_45427 = 'component_45427';
export function Component45427({ value = 45427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45427, 'data-value': derived.doubled }, children);
}
export default Component45427;
