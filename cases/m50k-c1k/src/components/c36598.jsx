import React from 'react';
const LABEL_36598 = 'component_36598';
export function Component36598({ value = 36598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36598, 'data-value': derived.doubled }, children);
}
export default Component36598;
