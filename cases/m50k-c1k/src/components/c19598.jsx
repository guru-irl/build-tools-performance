import React from 'react';
const LABEL_19598 = 'component_19598';
export function Component19598({ value = 19598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19598, 'data-value': derived.doubled }, children);
}
export default Component19598;
