import React from 'react';
const LABEL_25291 = 'component_25291';
export function Component25291({ value = 25291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25291, 'data-value': derived.doubled }, children);
}
export default Component25291;
