import React from 'react';
const LABEL_36703 = 'component_36703';
export function Component36703({ value = 36703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36703, 'data-value': derived.doubled }, children);
}
export default Component36703;
