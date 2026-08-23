import React from 'react';
const LABEL_27598 = 'component_27598';
export function Component27598({ value = 27598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27598, 'data-value': derived.doubled }, children);
}
export default Component27598;
