import React from 'react';
const LABEL_16024 = 'component_16024';
export function Component16024({ value = 16024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16024, 'data-value': derived.doubled }, children);
}
export default Component16024;
