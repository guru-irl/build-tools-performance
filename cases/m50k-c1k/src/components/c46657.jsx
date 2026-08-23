import React from 'react';
const LABEL_46657 = 'component_46657';
export function Component46657({ value = 46657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46657, 'data-value': derived.doubled }, children);
}
export default Component46657;
