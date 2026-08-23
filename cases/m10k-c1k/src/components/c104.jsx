import React from 'react';
const LABEL_104 = 'component_104';
export function Component104({ value = 104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_104, 'data-value': derived.doubled }, children);
}
export default Component104;
