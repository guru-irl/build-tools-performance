import React from 'react';
const LABEL_16460 = 'component_16460';
export function Component16460({ value = 16460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16460, 'data-value': derived.doubled }, children);
}
export default Component16460;
