import React from 'react';
const LABEL_23645 = 'component_23645';
export function Component23645({ value = 23645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23645, 'data-value': derived.doubled }, children);
}
export default Component23645;
