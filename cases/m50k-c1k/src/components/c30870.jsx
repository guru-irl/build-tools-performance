import React from 'react';
const LABEL_30870 = 'component_30870';
export function Component30870({ value = 30870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30870, 'data-value': derived.doubled }, children);
}
export default Component30870;
