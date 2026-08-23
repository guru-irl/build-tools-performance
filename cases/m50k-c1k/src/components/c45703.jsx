import React from 'react';
const LABEL_45703 = 'component_45703';
export function Component45703({ value = 45703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45703, 'data-value': derived.doubled }, children);
}
export default Component45703;
