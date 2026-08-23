import React from 'react';
const LABEL_22598 = 'component_22598';
export function Component22598({ value = 22598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22598, 'data-value': derived.doubled }, children);
}
export default Component22598;
