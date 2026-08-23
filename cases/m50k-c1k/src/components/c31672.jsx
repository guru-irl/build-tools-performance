import React from 'react';
const LABEL_31672 = 'component_31672';
export function Component31672({ value = 31672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31672, 'data-value': derived.doubled }, children);
}
export default Component31672;
