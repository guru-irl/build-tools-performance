import React from 'react';
const LABEL_17288 = 'component_17288';
export function Component17288({ value = 17288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17288, 'data-value': derived.doubled }, children);
}
export default Component17288;
