import React from 'react';
const LABEL_46383 = 'component_46383';
export function Component46383({ value = 46383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46383, 'data-value': derived.doubled }, children);
}
export default Component46383;
