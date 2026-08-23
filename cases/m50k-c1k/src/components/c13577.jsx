import React from 'react';
const LABEL_13577 = 'component_13577';
export function Component13577({ value = 13577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13577, 'data-value': derived.doubled }, children);
}
export default Component13577;
