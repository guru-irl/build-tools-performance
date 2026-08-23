import React from 'react';
const LABEL_15598 = 'component_15598';
export function Component15598({ value = 15598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15598, 'data-value': derived.doubled }, children);
}
export default Component15598;
