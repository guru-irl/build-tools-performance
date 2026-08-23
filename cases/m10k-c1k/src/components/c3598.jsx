import React from 'react';
const LABEL_3598 = 'component_3598';
export function Component3598({ value = 3598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3598, 'data-value': derived.doubled }, children);
}
export default Component3598;
