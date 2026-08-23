import React from 'react';
const LABEL_42681 = 'component_42681';
export function Component42681({ value = 42681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42681, 'data-value': derived.doubled }, children);
}
export default Component42681;
