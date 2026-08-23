import React from 'react';
const LABEL_18908 = 'component_18908';
export function Component18908({ value = 18908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18908, 'data-value': derived.doubled }, children);
}
export default Component18908;
