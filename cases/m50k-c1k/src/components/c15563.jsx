import React from 'react';
const LABEL_15563 = 'component_15563';
export function Component15563({ value = 15563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15563, 'data-value': derived.doubled }, children);
}
export default Component15563;
