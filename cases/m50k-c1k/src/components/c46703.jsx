import React from 'react';
const LABEL_46703 = 'component_46703';
export function Component46703({ value = 46703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46703, 'data-value': derived.doubled }, children);
}
export default Component46703;
