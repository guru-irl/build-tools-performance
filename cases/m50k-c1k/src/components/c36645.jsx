import React from 'react';
const LABEL_36645 = 'component_36645';
export function Component36645({ value = 36645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36645, 'data-value': derived.doubled }, children);
}
export default Component36645;
