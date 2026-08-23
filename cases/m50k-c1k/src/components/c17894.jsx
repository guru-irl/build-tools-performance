import React from 'react';
const LABEL_17894 = 'component_17894';
export function Component17894({ value = 17894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17894, 'data-value': derived.doubled }, children);
}
export default Component17894;
