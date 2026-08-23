import React from 'react';
const LABEL_46000 = 'component_46000';
export function Component46000({ value = 46000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46000, 'data-value': derived.doubled }, children);
}
export default Component46000;
