import React from 'react';
const LABEL_21703 = 'component_21703';
export function Component21703({ value = 21703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21703, 'data-value': derived.doubled }, children);
}
export default Component21703;
