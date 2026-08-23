import React from 'react';
const LABEL_36681 = 'component_36681';
export function Component36681({ value = 36681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36681, 'data-value': derived.doubled }, children);
}
export default Component36681;
