import React from 'react';
const LABEL_24598 = 'component_24598';
export function Component24598({ value = 24598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24598, 'data-value': derived.doubled }, children);
}
export default Component24598;
