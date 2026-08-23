import React from 'react';
const LABEL_11645 = 'component_11645';
export function Component11645({ value = 11645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11645, 'data-value': derived.doubled }, children);
}
export default Component11645;
