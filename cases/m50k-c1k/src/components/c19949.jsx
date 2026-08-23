import React from 'react';
const LABEL_19949 = 'component_19949';
export function Component19949({ value = 19949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19949, 'data-value': derived.doubled }, children);
}
export default Component19949;
