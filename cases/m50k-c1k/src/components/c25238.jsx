import React from 'react';
const LABEL_25238 = 'component_25238';
export function Component25238({ value = 25238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25238, 'data-value': derived.doubled }, children);
}
export default Component25238;
