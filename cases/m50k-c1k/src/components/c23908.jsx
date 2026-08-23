import React from 'react';
const LABEL_23908 = 'component_23908';
export function Component23908({ value = 23908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23908, 'data-value': derived.doubled }, children);
}
export default Component23908;
