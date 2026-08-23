import React from 'react';
const LABEL_42598 = 'component_42598';
export function Component42598({ value = 42598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42598, 'data-value': derived.doubled }, children);
}
export default Component42598;
