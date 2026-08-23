import React from 'react';
const LABEL_17394 = 'component_17394';
export function Component17394({ value = 17394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17394, 'data-value': derived.doubled }, children);
}
export default Component17394;
