import React from 'react';
const LABEL_703 = 'component_703';
export function Component703({ value = 703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_703, 'data-value': derived.doubled }, children);
}
export default Component703;
