import React from 'react';
const LABEL_28908 = 'component_28908';
export function Component28908({ value = 28908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28908, 'data-value': derived.doubled }, children);
}
export default Component28908;
