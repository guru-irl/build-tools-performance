import React from 'react';
const LABEL_45418 = 'component_45418';
export function Component45418({ value = 45418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45418, 'data-value': derived.doubled }, children);
}
export default Component45418;
