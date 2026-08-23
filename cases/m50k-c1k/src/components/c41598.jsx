import React from 'react';
const LABEL_41598 = 'component_41598';
export function Component41598({ value = 41598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41598, 'data-value': derived.doubled }, children);
}
export default Component41598;
