import React from 'react';
const LABEL_26598 = 'component_26598';
export function Component26598({ value = 26598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26598, 'data-value': derived.doubled }, children);
}
export default Component26598;
