import React from 'react';
const LABEL_29949 = 'component_29949';
export function Component29949({ value = 29949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29949, 'data-value': derived.doubled }, children);
}
export default Component29949;
