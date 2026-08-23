import React from 'react';
const LABEL_41703 = 'component_41703';
export function Component41703({ value = 41703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41703, 'data-value': derived.doubled }, children);
}
export default Component41703;
