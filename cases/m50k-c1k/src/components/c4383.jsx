import React from 'react';
const LABEL_4383 = 'component_4383';
export function Component4383({ value = 4383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4383, 'data-value': derived.doubled }, children);
}
export default Component4383;
