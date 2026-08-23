import React from 'react';
const LABEL_35847 = 'component_35847';
export function Component35847({ value = 35847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35847, 'data-value': derived.doubled }, children);
}
export default Component35847;
