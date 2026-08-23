import React from 'react';
const LABEL_775 = 'component_775';
export function Component775({ value = 775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_775, 'data-value': derived.doubled }, children);
}
export default Component775;
