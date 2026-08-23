import React from 'react';
const LABEL_11908 = 'component_11908';
export function Component11908({ value = 11908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11908, 'data-value': derived.doubled }, children);
}
export default Component11908;
