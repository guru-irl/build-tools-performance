import React from 'react';
const LABEL_22703 = 'component_22703';
export function Component22703({ value = 22703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22703, 'data-value': derived.doubled }, children);
}
export default Component22703;
