import React from 'react';
const LABEL_22949 = 'component_22949';
export function Component22949({ value = 22949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22949, 'data-value': derived.doubled }, children);
}
export default Component22949;
