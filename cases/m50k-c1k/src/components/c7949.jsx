import React from 'react';
const LABEL_7949 = 'component_7949';
export function Component7949({ value = 7949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7949, 'data-value': derived.doubled }, children);
}
export default Component7949;
