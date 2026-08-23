import React from 'react';
const LABEL_13908 = 'component_13908';
export function Component13908({ value = 13908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13908, 'data-value': derived.doubled }, children);
}
export default Component13908;
