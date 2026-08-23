import React from 'react';
const LABEL_43728 = 'component_43728';
export function Component43728({ value = 43728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43728, 'data-value': derived.doubled }, children);
}
export default Component43728;
