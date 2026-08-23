import React from 'react';
const LABEL_31598 = 'component_31598';
export function Component31598({ value = 31598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31598, 'data-value': derived.doubled }, children);
}
export default Component31598;
