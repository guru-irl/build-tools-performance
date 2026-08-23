import React from 'react';
const LABEL_4104 = 'component_4104';
export function Component4104({ value = 4104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4104, 'data-value': derived.doubled }, children);
}
export default Component4104;
