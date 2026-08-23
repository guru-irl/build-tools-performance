import React from 'react';
const LABEL_18036 = 'component_18036';
export function Component18036({ value = 18036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18036, 'data-value': derived.doubled }, children);
}
export default Component18036;
