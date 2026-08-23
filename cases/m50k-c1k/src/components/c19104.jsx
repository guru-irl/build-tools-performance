import React from 'react';
const LABEL_19104 = 'component_19104';
export function Component19104({ value = 19104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19104, 'data-value': derived.doubled }, children);
}
export default Component19104;
