import React from 'react';
const LABEL_46018 = 'component_46018';
export function Component46018({ value = 46018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46018, 'data-value': derived.doubled }, children);
}
export default Component46018;
