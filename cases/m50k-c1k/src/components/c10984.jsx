import React from 'react';
const LABEL_10984 = 'component_10984';
export function Component10984({ value = 10984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10984, 'data-value': derived.doubled }, children);
}
export default Component10984;
