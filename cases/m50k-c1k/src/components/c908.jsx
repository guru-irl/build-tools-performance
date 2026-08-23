import React from 'react';
const LABEL_908 = 'component_908';
export function Component908({ value = 908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_908, 'data-value': derived.doubled }, children);
}
export default Component908;
