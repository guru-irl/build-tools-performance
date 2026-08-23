import React from 'react';
const LABEL_29598 = 'component_29598';
export function Component29598({ value = 29598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29598, 'data-value': derived.doubled }, children);
}
export default Component29598;
