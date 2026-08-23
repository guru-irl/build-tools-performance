import React from 'react';
const LABEL_40703 = 'component_40703';
export function Component40703({ value = 40703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40703, 'data-value': derived.doubled }, children);
}
export default Component40703;
