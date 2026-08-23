import React from 'react';
const LABEL_14703 = 'component_14703';
export function Component14703({ value = 14703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14703, 'data-value': derived.doubled }, children);
}
export default Component14703;
