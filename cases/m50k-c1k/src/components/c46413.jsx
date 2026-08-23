import React from 'react';
const LABEL_46413 = 'component_46413';
export function Component46413({ value = 46413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46413, 'data-value': derived.doubled }, children);
}
export default Component46413;
