import React from 'react';
const LABEL_38908 = 'component_38908';
export function Component38908({ value = 38908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38908, 'data-value': derived.doubled }, children);
}
export default Component38908;
