import React from 'react';
const LABEL_14818 = 'component_14818';
export function Component14818({ value = 14818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14818, 'data-value': derived.doubled }, children);
}
export default Component14818;
