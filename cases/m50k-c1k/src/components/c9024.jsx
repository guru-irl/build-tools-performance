import React from 'react';
const LABEL_9024 = 'component_9024';
export function Component9024({ value = 9024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9024, 'data-value': derived.doubled }, children);
}
export default Component9024;
