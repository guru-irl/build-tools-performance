import React from 'react';
const LABEL_44686 = 'component_44686';
export function Component44686({ value = 44686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44686, 'data-value': derived.doubled }, children);
}
export default Component44686;
