import React from 'react';
const LABEL_38024 = 'component_38024';
export function Component38024({ value = 38024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38024, 'data-value': derived.doubled }, children);
}
export default Component38024;
