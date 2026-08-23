import React from 'react';
const LABEL_17582 = 'component_17582';
export function Component17582({ value = 17582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17582, 'data-value': derived.doubled }, children);
}
export default Component17582;
