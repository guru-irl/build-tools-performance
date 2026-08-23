import React from 'react';
const LABEL_16870 = 'component_16870';
export function Component16870({ value = 16870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16870, 'data-value': derived.doubled }, children);
}
export default Component16870;
