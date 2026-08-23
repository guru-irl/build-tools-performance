import React from 'react';
const LABEL_15024 = 'component_15024';
export function Component15024({ value = 15024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15024, 'data-value': derived.doubled }, children);
}
export default Component15024;
