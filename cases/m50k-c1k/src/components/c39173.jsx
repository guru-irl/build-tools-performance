import React from 'react';
const LABEL_39173 = 'component_39173';
export function Component39173({ value = 39173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39173, 'data-value': derived.doubled }, children);
}
export default Component39173;
