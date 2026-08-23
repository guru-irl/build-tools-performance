import React from 'react';
const LABEL_40104 = 'component_40104';
export function Component40104({ value = 40104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40104, 'data-value': derived.doubled }, children);
}
export default Component40104;
