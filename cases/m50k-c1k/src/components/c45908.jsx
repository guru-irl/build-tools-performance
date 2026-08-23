import React from 'react';
const LABEL_45908 = 'component_45908';
export function Component45908({ value = 45908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45908, 'data-value': derived.doubled }, children);
}
export default Component45908;
