import React from 'react';
const LABEL_13173 = 'component_13173';
export function Component13173({ value = 13173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13173, 'data-value': derived.doubled }, children);
}
export default Component13173;
