import React from 'react';
const LABEL_25850 = 'component_25850';
export function Component25850({ value = 25850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25850, 'data-value': derived.doubled }, children);
}
export default Component25850;
