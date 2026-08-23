import React from 'react';
const LABEL_39383 = 'component_39383';
export function Component39383({ value = 39383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39383, 'data-value': derived.doubled }, children);
}
export default Component39383;
