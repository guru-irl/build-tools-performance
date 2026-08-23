import React from 'react';
const LABEL_20845 = 'component_20845';
export function Component20845({ value = 20845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20845, 'data-value': derived.doubled }, children);
}
export default Component20845;
