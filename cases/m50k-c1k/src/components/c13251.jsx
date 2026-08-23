import React from 'react';
const LABEL_13251 = 'component_13251';
export function Component13251({ value = 13251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13251, 'data-value': derived.doubled }, children);
}
export default Component13251;
