import React from 'react';
const LABEL_12908 = 'component_12908';
export function Component12908({ value = 12908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12908, 'data-value': derived.doubled }, children);
}
export default Component12908;
