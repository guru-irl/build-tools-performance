import React from 'react';
const LABEL_5870 = 'component_5870';
export function Component5870({ value = 5870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5870, 'data-value': derived.doubled }, children);
}
export default Component5870;
