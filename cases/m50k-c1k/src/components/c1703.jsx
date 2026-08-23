import React from 'react';
const LABEL_1703 = 'component_1703';
export function Component1703({ value = 1703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1703, 'data-value': derived.doubled }, children);
}
export default Component1703;
