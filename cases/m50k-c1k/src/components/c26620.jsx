import React from 'react';
const LABEL_26620 = 'component_26620';
export function Component26620({ value = 26620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26620, 'data-value': derived.doubled }, children);
}
export default Component26620;
