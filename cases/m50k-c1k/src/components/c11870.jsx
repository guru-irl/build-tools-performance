import React from 'react';
const LABEL_11870 = 'component_11870';
export function Component11870({ value = 11870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11870, 'data-value': derived.doubled }, children);
}
export default Component11870;
