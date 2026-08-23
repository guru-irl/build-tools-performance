import React from 'react';
const LABEL_26371 = 'component_26371';
export function Component26371({ value = 26371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26371, 'data-value': derived.doubled }, children);
}
export default Component26371;
