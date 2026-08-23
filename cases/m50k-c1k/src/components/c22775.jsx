import React from 'react';
const LABEL_22775 = 'component_22775';
export function Component22775({ value = 22775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22775, 'data-value': derived.doubled }, children);
}
export default Component22775;
