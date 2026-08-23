import React from 'react';
const LABEL_10598 = 'component_10598';
export function Component10598({ value = 10598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10598, 'data-value': derived.doubled }, children);
}
export default Component10598;
