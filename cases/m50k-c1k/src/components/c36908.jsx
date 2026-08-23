import React from 'react';
const LABEL_36908 = 'component_36908';
export function Component36908({ value = 36908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36908, 'data-value': derived.doubled }, children);
}
export default Component36908;
