import React from 'react';
const LABEL_21775 = 'component_21775';
export function Component21775({ value = 21775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21775, 'data-value': derived.doubled }, children);
}
export default Component21775;
