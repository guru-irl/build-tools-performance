import React from 'react';
const LABEL_29703 = 'component_29703';
export function Component29703({ value = 29703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29703, 'data-value': derived.doubled }, children);
}
export default Component29703;
