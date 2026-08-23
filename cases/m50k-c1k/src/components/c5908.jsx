import React from 'react';
const LABEL_5908 = 'component_5908';
export function Component5908({ value = 5908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5908, 'data-value': derived.doubled }, children);
}
export default Component5908;
