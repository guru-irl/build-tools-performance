import React from 'react';
const LABEL_7645 = 'component_7645';
export function Component7645({ value = 7645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7645, 'data-value': derived.doubled }, children);
}
export default Component7645;
