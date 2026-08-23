import React from 'react';
const LABEL_29736 = 'component_29736';
export function Component29736({ value = 29736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29736, 'data-value': derived.doubled }, children);
}
export default Component29736;
