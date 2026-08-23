import React from 'react';
const LABEL_20582 = 'component_20582';
export function Component20582({ value = 20582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20582, 'data-value': derived.doubled }, children);
}
export default Component20582;
