import React from 'react';
const LABEL_14984 = 'component_14984';
export function Component14984({ value = 14984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14984, 'data-value': derived.doubled }, children);
}
export default Component14984;
