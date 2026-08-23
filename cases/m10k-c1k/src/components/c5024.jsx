import React from 'react';
const LABEL_5024 = 'component_5024';
export function Component5024({ value = 5024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5024, 'data-value': derived.doubled }, children);
}
export default Component5024;
