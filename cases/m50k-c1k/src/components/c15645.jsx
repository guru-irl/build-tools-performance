import React from 'react';
const LABEL_15645 = 'component_15645';
export function Component15645({ value = 15645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15645, 'data-value': derived.doubled }, children);
}
export default Component15645;
