import React from 'react';
const LABEL_20703 = 'component_20703';
export function Component20703({ value = 20703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20703, 'data-value': derived.doubled }, children);
}
export default Component20703;
