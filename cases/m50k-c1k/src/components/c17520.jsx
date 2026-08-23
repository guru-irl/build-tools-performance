import React from 'react';
const LABEL_17520 = 'component_17520';
export function Component17520({ value = 17520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17520, 'data-value': derived.doubled }, children);
}
export default Component17520;
