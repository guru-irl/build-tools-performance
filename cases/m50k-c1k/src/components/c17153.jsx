import React from 'react';
const LABEL_17153 = 'component_17153';
export function Component17153({ value = 17153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17153, 'data-value': derived.doubled }, children);
}
export default Component17153;
