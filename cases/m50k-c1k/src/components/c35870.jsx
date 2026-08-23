import React from 'react';
const LABEL_35870 = 'component_35870';
export function Component35870({ value = 35870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35870, 'data-value': derived.doubled }, children);
}
export default Component35870;
