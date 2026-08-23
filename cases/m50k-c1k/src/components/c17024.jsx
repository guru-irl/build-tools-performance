import React from 'react';
const LABEL_17024 = 'component_17024';
export function Component17024({ value = 17024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17024, 'data-value': derived.doubled }, children);
}
export default Component17024;
