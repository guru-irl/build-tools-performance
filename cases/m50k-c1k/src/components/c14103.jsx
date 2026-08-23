import React from 'react';
const LABEL_14103 = 'component_14103';
export function Component14103({ value = 14103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14103, 'data-value': derived.doubled }, children);
}
export default Component14103;
