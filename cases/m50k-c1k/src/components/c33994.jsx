import React from 'react';
const LABEL_33994 = 'component_33994';
export function Component33994({ value = 33994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33994, 'data-value': derived.doubled }, children);
}
export default Component33994;
