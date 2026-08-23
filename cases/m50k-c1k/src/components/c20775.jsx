import React from 'react';
const LABEL_20775 = 'component_20775';
export function Component20775({ value = 20775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20775, 'data-value': derived.doubled }, children);
}
export default Component20775;
