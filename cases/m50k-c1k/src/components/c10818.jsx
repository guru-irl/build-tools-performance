import React from 'react';
const LABEL_10818 = 'component_10818';
export function Component10818({ value = 10818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10818, 'data-value': derived.doubled }, children);
}
export default Component10818;
