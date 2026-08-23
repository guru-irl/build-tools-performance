import React from 'react';
const LABEL_15164 = 'component_15164';
export function Component15164({ value = 15164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15164, 'data-value': derived.doubled }, children);
}
export default Component15164;
