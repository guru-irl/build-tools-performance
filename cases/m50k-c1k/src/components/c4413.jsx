import React from 'react';
const LABEL_4413 = 'component_4413';
export function Component4413({ value = 4413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4413, 'data-value': derived.doubled }, children);
}
export default Component4413;
