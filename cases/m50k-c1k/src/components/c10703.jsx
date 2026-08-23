import React from 'react';
const LABEL_10703 = 'component_10703';
export function Component10703({ value = 10703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10703, 'data-value': derived.doubled }, children);
}
export default Component10703;
