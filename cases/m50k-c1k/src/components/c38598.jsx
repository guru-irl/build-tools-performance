import React from 'react';
const LABEL_38598 = 'component_38598';
export function Component38598({ value = 38598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38598, 'data-value': derived.doubled }, children);
}
export default Component38598;
