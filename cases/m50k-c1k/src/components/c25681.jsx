import React from 'react';
const LABEL_25681 = 'component_25681';
export function Component25681({ value = 25681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25681, 'data-value': derived.doubled }, children);
}
export default Component25681;
