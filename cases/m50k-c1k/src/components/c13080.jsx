import React from 'react';
const LABEL_13080 = 'component_13080';
export function Component13080({ value = 13080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13080, 'data-value': derived.doubled }, children);
}
export default Component13080;
