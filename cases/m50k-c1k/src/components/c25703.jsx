import React from 'react';
const LABEL_25703 = 'component_25703';
export function Component25703({ value = 25703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25703, 'data-value': derived.doubled }, children);
}
export default Component25703;
