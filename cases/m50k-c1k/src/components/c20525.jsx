import React from 'react';
const LABEL_20525 = 'component_20525';
export function Component20525({ value = 20525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20525, 'data-value': derived.doubled }, children);
}
export default Component20525;
