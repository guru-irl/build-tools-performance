import React from 'react';
const LABEL_24703 = 'component_24703';
export function Component24703({ value = 24703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24703, 'data-value': derived.doubled }, children);
}
export default Component24703;
