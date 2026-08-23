import React from 'react';
const LABEL_26024 = 'component_26024';
export function Component26024({ value = 26024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26024, 'data-value': derived.doubled }, children);
}
export default Component26024;
