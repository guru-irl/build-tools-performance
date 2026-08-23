import React from 'react';
const LABEL_14681 = 'component_14681';
export function Component14681({ value = 14681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14681, 'data-value': derived.doubled }, children);
}
export default Component14681;
