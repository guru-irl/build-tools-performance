import React from 'react';
const LABEL_25556 = 'component_25556';
export function Component25556({ value = 25556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25556, 'data-value': derived.doubled }, children);
}
export default Component25556;
