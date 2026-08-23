import React from 'react';
const LABEL_17892 = 'component_17892';
export function Component17892({ value = 17892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17892, 'data-value': derived.doubled }, children);
}
export default Component17892;
