import React from 'react';
const LABEL_33450 = 'component_33450';
export function Component33450({ value = 33450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33450, 'data-value': derived.doubled }, children);
}
export default Component33450;
