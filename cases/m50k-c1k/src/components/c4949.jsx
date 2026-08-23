import React from 'react';
const LABEL_4949 = 'component_4949';
export function Component4949({ value = 4949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4949, 'data-value': derived.doubled }, children);
}
export default Component4949;
