import React from 'react';
const LABEL_17925 = 'component_17925';
export function Component17925({ value = 17925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17925, 'data-value': derived.doubled }, children);
}
export default Component17925;
