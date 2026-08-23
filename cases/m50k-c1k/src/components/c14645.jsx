import React from 'react';
const LABEL_14645 = 'component_14645';
export function Component14645({ value = 14645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14645, 'data-value': derived.doubled }, children);
}
export default Component14645;
