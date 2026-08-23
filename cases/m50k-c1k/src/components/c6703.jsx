import React from 'react';
const LABEL_6703 = 'component_6703';
export function Component6703({ value = 6703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6703, 'data-value': derived.doubled }, children);
}
export default Component6703;
