import React from 'react';
const LABEL_46506 = 'component_46506';
export function Component46506({ value = 46506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46506, 'data-value': derived.doubled }, children);
}
export default Component46506;
