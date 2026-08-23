import React from 'react';
const LABEL_413 = 'component_413';
export function Component413({ value = 413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_413, 'data-value': derived.doubled }, children);
}
export default Component413;
