import React from 'react';
const LABEL_46661 = 'component_46661';
export function Component46661({ value = 46661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46661, 'data-value': derived.doubled }, children);
}
export default Component46661;
