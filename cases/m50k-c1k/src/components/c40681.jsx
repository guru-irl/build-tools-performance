import React from 'react';
const LABEL_40681 = 'component_40681';
export function Component40681({ value = 40681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40681, 'data-value': derived.doubled }, children);
}
export default Component40681;
