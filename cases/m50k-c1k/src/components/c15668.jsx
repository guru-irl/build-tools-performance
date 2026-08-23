import React from 'react';
const LABEL_15668 = 'component_15668';
export function Component15668({ value = 15668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15668, 'data-value': derived.doubled }, children);
}
export default Component15668;
