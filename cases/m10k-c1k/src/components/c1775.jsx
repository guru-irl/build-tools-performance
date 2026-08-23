import React from 'react';
const LABEL_1775 = 'component_1775';
export function Component1775({ value = 1775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1775, 'data-value': derived.doubled }, children);
}
export default Component1775;
