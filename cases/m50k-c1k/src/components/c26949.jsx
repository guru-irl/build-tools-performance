import React from 'react';
const LABEL_26949 = 'component_26949';
export function Component26949({ value = 26949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26949, 'data-value': derived.doubled }, children);
}
export default Component26949;
