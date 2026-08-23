import React from 'react';
const LABEL_8837 = 'component_8837';
export function Component8837({ value = 8837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8837, 'data-value': derived.doubled }, children);
}
export default Component8837;
