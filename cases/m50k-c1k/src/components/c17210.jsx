import React from 'react';
const LABEL_17210 = 'component_17210';
export function Component17210({ value = 17210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17210, 'data-value': derived.doubled }, children);
}
export default Component17210;
