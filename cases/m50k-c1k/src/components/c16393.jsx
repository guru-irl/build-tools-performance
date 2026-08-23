import React from 'react';
const LABEL_16393 = 'component_16393';
export function Component16393({ value = 16393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16393, 'data-value': derived.doubled }, children);
}
export default Component16393;
