import React from 'react';
const LABEL_35598 = 'component_35598';
export function Component35598({ value = 35598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35598, 'data-value': derived.doubled }, children);
}
export default Component35598;
