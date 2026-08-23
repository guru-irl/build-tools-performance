import React from 'react';
const LABEL_26050 = 'component_26050';
export function Component26050({ value = 26050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26050, 'data-value': derived.doubled }, children);
}
export default Component26050;
