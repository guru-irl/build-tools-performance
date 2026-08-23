import React from 'react';
const LABEL_14806 = 'component_14806';
export function Component14806({ value = 14806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14806, 'data-value': derived.doubled }, children);
}
export default Component14806;
