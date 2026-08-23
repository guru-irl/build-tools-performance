import React from 'react';
const LABEL_30818 = 'component_30818';
export function Component30818({ value = 30818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30818, 'data-value': derived.doubled }, children);
}
export default Component30818;
