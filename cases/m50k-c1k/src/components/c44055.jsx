import React from 'react';
const LABEL_44055 = 'component_44055';
export function Component44055({ value = 44055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44055, 'data-value': derived.doubled }, children);
}
export default Component44055;
