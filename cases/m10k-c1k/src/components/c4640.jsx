import React from 'react';
const LABEL_4640 = 'component_4640';
export function Component4640({ value = 4640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4640, 'data-value': derived.doubled }, children);
}
export default Component4640;
