import React from 'react';
const LABEL_17966 = 'component_17966';
export function Component17966({ value = 17966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17966, 'data-value': derived.doubled }, children);
}
export default Component17966;
