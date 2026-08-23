import React from 'react';
const LABEL_40413 = 'component_40413';
export function Component40413({ value = 40413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40413, 'data-value': derived.doubled }, children);
}
export default Component40413;
