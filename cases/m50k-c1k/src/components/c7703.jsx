import React from 'react';
const LABEL_7703 = 'component_7703';
export function Component7703({ value = 7703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7703, 'data-value': derived.doubled }, children);
}
export default Component7703;
