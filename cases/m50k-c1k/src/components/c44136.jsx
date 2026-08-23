import React from 'react';
const LABEL_44136 = 'component_44136';
export function Component44136({ value = 44136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44136, 'data-value': derived.doubled }, children);
}
export default Component44136;
