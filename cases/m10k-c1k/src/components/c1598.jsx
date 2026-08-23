import React from 'react';
const LABEL_1598 = 'component_1598';
export function Component1598({ value = 1598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1598, 'data-value': derived.doubled }, children);
}
export default Component1598;
