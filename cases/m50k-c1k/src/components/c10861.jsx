import React from 'react';
const LABEL_10861 = 'component_10861';
export function Component10861({ value = 10861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10861, 'data-value': derived.doubled }, children);
}
export default Component10861;
