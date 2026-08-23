import React from 'react';
const LABEL_25598 = 'component_25598';
export function Component25598({ value = 25598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25598, 'data-value': derived.doubled }, children);
}
export default Component25598;
