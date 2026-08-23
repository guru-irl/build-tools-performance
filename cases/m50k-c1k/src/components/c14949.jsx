import React from 'react';
const LABEL_14949 = 'component_14949';
export function Component14949({ value = 14949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14949, 'data-value': derived.doubled }, children);
}
export default Component14949;
