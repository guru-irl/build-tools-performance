import React from 'react';
const LABEL_35783 = 'component_35783';
export function Component35783({ value = 35783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35783, 'data-value': derived.doubled }, children);
}
export default Component35783;
