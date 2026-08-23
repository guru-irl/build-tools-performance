import React from 'react';
const LABEL_35291 = 'component_35291';
export function Component35291({ value = 35291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35291, 'data-value': derived.doubled }, children);
}
export default Component35291;
