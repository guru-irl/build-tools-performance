import React from 'react';
const LABEL_44703 = 'component_44703';
export function Component44703({ value = 44703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44703, 'data-value': derived.doubled }, children);
}
export default Component44703;
