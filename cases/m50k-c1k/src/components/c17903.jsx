import React from 'react';
const LABEL_17903 = 'component_17903';
export function Component17903({ value = 17903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17903, 'data-value': derived.doubled }, children);
}
export default Component17903;
