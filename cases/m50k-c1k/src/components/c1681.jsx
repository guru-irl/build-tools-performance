import React from 'react';
const LABEL_1681 = 'component_1681';
export function Component1681({ value = 1681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1681, 'data-value': derived.doubled }, children);
}
export default Component1681;
