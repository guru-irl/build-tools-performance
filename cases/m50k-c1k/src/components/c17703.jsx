import React from 'react';
const LABEL_17703 = 'component_17703';
export function Component17703({ value = 17703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17703, 'data-value': derived.doubled }, children);
}
export default Component17703;
