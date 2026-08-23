import React from 'react';
const LABEL_36746 = 'component_36746';
export function Component36746({ value = 36746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36746, 'data-value': derived.doubled }, children);
}
export default Component36746;
