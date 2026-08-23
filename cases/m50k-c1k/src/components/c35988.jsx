import React from 'react';
const LABEL_35988 = 'component_35988';
export function Component35988({ value = 35988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35988, 'data-value': derived.doubled }, children);
}
export default Component35988;
