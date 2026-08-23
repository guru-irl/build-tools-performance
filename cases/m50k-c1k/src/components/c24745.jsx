import React from 'react';
const LABEL_24745 = 'component_24745';
export function Component24745({ value = 24745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24745, 'data-value': derived.doubled }, children);
}
export default Component24745;
