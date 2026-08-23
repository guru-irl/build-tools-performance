import React from 'react';
const LABEL_26645 = 'component_26645';
export function Component26645({ value = 26645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26645, 'data-value': derived.doubled }, children);
}
export default Component26645;
