import React from 'react';
const LABEL_13383 = 'component_13383';
export function Component13383({ value = 13383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13383, 'data-value': derived.doubled }, children);
}
export default Component13383;
