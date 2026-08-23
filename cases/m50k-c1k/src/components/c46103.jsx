import React from 'react';
const LABEL_46103 = 'component_46103';
export function Component46103({ value = 46103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46103, 'data-value': derived.doubled }, children);
}
export default Component46103;
