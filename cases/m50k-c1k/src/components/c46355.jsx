import React from 'react';
const LABEL_46355 = 'component_46355';
export function Component46355({ value = 46355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46355, 'data-value': derived.doubled }, children);
}
export default Component46355;
