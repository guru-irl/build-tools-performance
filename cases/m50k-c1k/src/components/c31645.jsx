import React from 'react';
const LABEL_31645 = 'component_31645';
export function Component31645({ value = 31645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31645, 'data-value': derived.doubled }, children);
}
export default Component31645;
