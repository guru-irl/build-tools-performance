import React from 'react';
const LABEL_17144 = 'component_17144';
export function Component17144({ value = 17144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17144, 'data-value': derived.doubled }, children);
}
export default Component17144;
