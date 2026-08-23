import React from 'react';
const LABEL_11703 = 'component_11703';
export function Component11703({ value = 11703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11703, 'data-value': derived.doubled }, children);
}
export default Component11703;
