import React from 'react';
const LABEL_17013 = 'component_17013';
export function Component17013({ value = 17013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17013, 'data-value': derived.doubled }, children);
}
export default Component17013;
