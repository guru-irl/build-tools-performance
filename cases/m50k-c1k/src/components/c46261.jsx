import React from 'react';
const LABEL_46261 = 'component_46261';
export function Component46261({ value = 46261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46261, 'data-value': derived.doubled }, children);
}
export default Component46261;
