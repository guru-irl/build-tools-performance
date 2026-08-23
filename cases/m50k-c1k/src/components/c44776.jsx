import React from 'react';
const LABEL_44776 = 'component_44776';
export function Component44776({ value = 44776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44776, 'data-value': derived.doubled }, children);
}
export default Component44776;
