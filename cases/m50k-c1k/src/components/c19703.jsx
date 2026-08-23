import React from 'react';
const LABEL_19703 = 'component_19703';
export function Component19703({ value = 19703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19703, 'data-value': derived.doubled }, children);
}
export default Component19703;
