import React from 'react';
const LABEL_25622 = 'component_25622';
export function Component25622({ value = 25622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25622, 'data-value': derived.doubled }, children);
}
export default Component25622;
