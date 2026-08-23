import React from 'react';
const LABEL_44908 = 'component_44908';
export function Component44908({ value = 44908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44908, 'data-value': derived.doubled }, children);
}
export default Component44908;
