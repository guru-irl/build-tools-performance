import React from 'react';
const LABEL_44366 = 'component_44366';
export function Component44366({ value = 44366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44366, 'data-value': derived.doubled }, children);
}
export default Component44366;
