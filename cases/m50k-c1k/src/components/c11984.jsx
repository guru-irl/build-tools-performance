import React from 'react';
const LABEL_11984 = 'component_11984';
export function Component11984({ value = 11984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11984, 'data-value': derived.doubled }, children);
}
export default Component11984;
