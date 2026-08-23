import React from 'react';
const LABEL_17420 = 'component_17420';
export function Component17420({ value = 17420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17420, 'data-value': derived.doubled }, children);
}
export default Component17420;
