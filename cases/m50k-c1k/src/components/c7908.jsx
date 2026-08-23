import React from 'react';
const LABEL_7908 = 'component_7908';
export function Component7908({ value = 7908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7908, 'data-value': derived.doubled }, children);
}
export default Component7908;
