import React from 'react';
const LABEL_15949 = 'component_15949';
export function Component15949({ value = 15949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15949, 'data-value': derived.doubled }, children);
}
export default Component15949;
