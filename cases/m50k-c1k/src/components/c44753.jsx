import React from 'react';
const LABEL_44753 = 'component_44753';
export function Component44753({ value = 44753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44753, 'data-value': derived.doubled }, children);
}
export default Component44753;
