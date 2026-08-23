import React from 'react';
const LABEL_36314 = 'component_36314';
export function Component36314({ value = 36314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36314, 'data-value': derived.doubled }, children);
}
export default Component36314;
