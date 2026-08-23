import React from 'react';
const LABEL_18598 = 'component_18598';
export function Component18598({ value = 18598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18598, 'data-value': derived.doubled }, children);
}
export default Component18598;
