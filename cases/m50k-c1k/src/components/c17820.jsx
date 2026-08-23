import React from 'react';
const LABEL_17820 = 'component_17820';
export function Component17820({ value = 17820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17820, 'data-value': derived.doubled }, children);
}
export default Component17820;
