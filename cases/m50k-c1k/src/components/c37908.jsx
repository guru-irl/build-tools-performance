import React from 'react';
const LABEL_37908 = 'component_37908';
export function Component37908({ value = 37908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37908, 'data-value': derived.doubled }, children);
}
export default Component37908;
