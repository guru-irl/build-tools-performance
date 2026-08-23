import React from 'react';
const LABEL_38418 = 'component_38418';
export function Component38418({ value = 38418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38418, 'data-value': derived.doubled }, children);
}
export default Component38418;
