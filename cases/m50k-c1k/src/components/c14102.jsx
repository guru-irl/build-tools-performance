import React from 'react';
const LABEL_14102 = 'component_14102';
export function Component14102({ value = 14102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14102, 'data-value': derived.doubled }, children);
}
export default Component14102;
