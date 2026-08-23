import React from 'react';
const LABEL_26506 = 'component_26506';
export function Component26506({ value = 26506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26506, 'data-value': derived.doubled }, children);
}
export default Component26506;
