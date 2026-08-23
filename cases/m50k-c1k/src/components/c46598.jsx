import React from 'react';
const LABEL_46598 = 'component_46598';
export function Component46598({ value = 46598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46598, 'data-value': derived.doubled }, children);
}
export default Component46598;
