import React from 'react';
const LABEL_20418 = 'component_20418';
export function Component20418({ value = 20418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20418, 'data-value': derived.doubled }, children);
}
export default Component20418;
