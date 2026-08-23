import React from 'react';
const LABEL_27703 = 'component_27703';
export function Component27703({ value = 27703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27703, 'data-value': derived.doubled }, children);
}
export default Component27703;
