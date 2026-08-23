import React from 'react';
const LABEL_25583 = 'component_25583';
export function Component25583({ value = 25583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25583, 'data-value': derived.doubled }, children);
}
export default Component25583;
