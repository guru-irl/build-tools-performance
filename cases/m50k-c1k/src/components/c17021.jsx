import React from 'react';
const LABEL_17021 = 'component_17021';
export function Component17021({ value = 17021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17021, 'data-value': derived.doubled }, children);
}
export default Component17021;
