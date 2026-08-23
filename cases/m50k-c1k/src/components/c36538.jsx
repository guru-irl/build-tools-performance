import React from 'react';
const LABEL_36538 = 'component_36538';
export function Component36538({ value = 36538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36538, 'data-value': derived.doubled }, children);
}
export default Component36538;
