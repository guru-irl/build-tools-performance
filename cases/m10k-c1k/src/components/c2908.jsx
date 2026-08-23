import React from 'react';
const LABEL_2908 = 'component_2908';
export function Component2908({ value = 2908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2908, 'data-value': derived.doubled }, children);
}
export default Component2908;
