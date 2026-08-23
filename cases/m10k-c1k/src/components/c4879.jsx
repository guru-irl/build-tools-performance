import React from 'react';
const LABEL_4879 = 'component_4879';
export function Component4879({ value = 4879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4879, 'data-value': derived.doubled }, children);
}
export default Component4879;
