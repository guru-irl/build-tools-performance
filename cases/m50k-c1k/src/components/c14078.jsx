import React from 'react';
const LABEL_14078 = 'component_14078';
export function Component14078({ value = 14078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14078, 'data-value': derived.doubled }, children);
}
export default Component14078;
