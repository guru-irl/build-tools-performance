import React from 'react';
const LABEL_35886 = 'component_35886';
export function Component35886({ value = 35886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35886, 'data-value': derived.doubled }, children);
}
export default Component35886;
