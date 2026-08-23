import React from 'react';
const LABEL_24681 = 'component_24681';
export function Component24681({ value = 24681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24681, 'data-value': derived.doubled }, children);
}
export default Component24681;
