import React from 'react';
const LABEL_5104 = 'component_5104';
export function Component5104({ value = 5104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5104, 'data-value': derived.doubled }, children);
}
export default Component5104;
