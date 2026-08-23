import React from 'react';
const LABEL_31908 = 'component_31908';
export function Component31908({ value = 31908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31908, 'data-value': derived.doubled }, children);
}
export default Component31908;
