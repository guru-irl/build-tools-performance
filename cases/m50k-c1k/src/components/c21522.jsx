import React from 'react';
const LABEL_21522 = 'component_21522';
export function Component21522({ value = 21522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21522, 'data-value': derived.doubled }, children);
}
export default Component21522;
