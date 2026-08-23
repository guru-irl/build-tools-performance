import React from 'react';
const LABEL_37703 = 'component_37703';
export function Component37703({ value = 37703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37703, 'data-value': derived.doubled }, children);
}
export default Component37703;
