import React from 'react';
const LABEL_28703 = 'component_28703';
export function Component28703({ value = 28703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28703, 'data-value': derived.doubled }, children);
}
export default Component28703;
