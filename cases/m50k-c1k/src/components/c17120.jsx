import React from 'react';
const LABEL_17120 = 'component_17120';
export function Component17120({ value = 17120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17120, 'data-value': derived.doubled }, children);
}
export default Component17120;
