import React from 'react';
const LABEL_35225 = 'component_35225';
export function Component35225({ value = 35225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35225, 'data-value': derived.doubled }, children);
}
export default Component35225;
