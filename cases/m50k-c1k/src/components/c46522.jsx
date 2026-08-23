import React from 'react';
const LABEL_46522 = 'component_46522';
export function Component46522({ value = 46522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46522, 'data-value': derived.doubled }, children);
}
export default Component46522;
