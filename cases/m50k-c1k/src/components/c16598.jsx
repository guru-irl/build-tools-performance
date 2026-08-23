import React from 'react';
const LABEL_16598 = 'component_16598';
export function Component16598({ value = 16598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16598, 'data-value': derived.doubled }, children);
}
export default Component16598;
