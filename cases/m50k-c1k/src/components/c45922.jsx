import React from 'react';
const LABEL_45922 = 'component_45922';
export function Component45922({ value = 45922, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45922, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45922, 'data-value': derived.doubled }, children);
}
export default Component45922;
