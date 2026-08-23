import React from 'react';
const LABEL_24417 = 'component_24417';
export function Component24417({ value = 24417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24417, 'data-value': derived.doubled }, children);
}
export default Component24417;
