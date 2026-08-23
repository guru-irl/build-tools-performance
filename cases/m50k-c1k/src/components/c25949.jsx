import React from 'react';
const LABEL_25949 = 'component_25949';
export function Component25949({ value = 25949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25949, 'data-value': derived.doubled }, children);
}
export default Component25949;
