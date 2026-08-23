import React from 'react';
const LABEL_18312 = 'component_18312';
export function Component18312({ value = 18312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18312, 'data-value': derived.doubled }, children);
}
export default Component18312;
