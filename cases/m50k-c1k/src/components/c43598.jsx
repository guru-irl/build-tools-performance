import React from 'react';
const LABEL_43598 = 'component_43598';
export function Component43598({ value = 43598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43598, 'data-value': derived.doubled }, children);
}
export default Component43598;
