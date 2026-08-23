import React from 'react';
const LABEL_26353 = 'component_26353';
export function Component26353({ value = 26353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26353, 'data-value': derived.doubled }, children);
}
export default Component26353;
