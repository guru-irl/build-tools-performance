import React from 'react';
const LABEL_32598 = 'component_32598';
export function Component32598({ value = 32598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32598, 'data-value': derived.doubled }, children);
}
export default Component32598;
