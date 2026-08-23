import React from 'react';
const LABEL_44611 = 'component_44611';
export function Component44611({ value = 44611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44611, 'data-value': derived.doubled }, children);
}
export default Component44611;
