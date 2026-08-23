import React from 'react';
const LABEL_28903 = 'component_28903';
export function Component28903({ value = 28903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28903, 'data-value': derived.doubled }, children);
}
export default Component28903;
