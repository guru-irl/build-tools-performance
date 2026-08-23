import React from 'react';
const LABEL_18949 = 'component_18949';
export function Component18949({ value = 18949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18949, 'data-value': derived.doubled }, children);
}
export default Component18949;
