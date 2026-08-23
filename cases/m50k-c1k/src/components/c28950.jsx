import React from 'react';
const LABEL_28950 = 'component_28950';
export function Component28950({ value = 28950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28950, 'data-value': derived.doubled }, children);
}
export default Component28950;
