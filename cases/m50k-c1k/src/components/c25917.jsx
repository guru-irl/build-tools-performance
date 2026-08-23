import React from 'react';
const LABEL_25917 = 'component_25917';
export function Component25917({ value = 25917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25917, 'data-value': derived.doubled }, children);
}
export default Component25917;
