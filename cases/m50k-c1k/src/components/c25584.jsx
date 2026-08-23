import React from 'react';
const LABEL_25584 = 'component_25584';
export function Component25584({ value = 25584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25584, 'data-value': derived.doubled }, children);
}
export default Component25584;
