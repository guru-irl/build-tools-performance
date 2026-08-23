import React from 'react';
const LABEL_36225 = 'component_36225';
export function Component36225({ value = 36225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36225, 'data-value': derived.doubled }, children);
}
export default Component36225;
