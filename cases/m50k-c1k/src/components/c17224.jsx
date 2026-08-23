import React from 'react';
const LABEL_17224 = 'component_17224';
export function Component17224({ value = 17224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17224, 'data-value': derived.doubled }, children);
}
export default Component17224;
