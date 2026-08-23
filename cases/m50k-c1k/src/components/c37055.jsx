import React from 'react';
const LABEL_37055 = 'component_37055';
export function Component37055({ value = 37055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37055, 'data-value': derived.doubled }, children);
}
export default Component37055;
