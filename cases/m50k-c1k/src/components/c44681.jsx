import React from 'react';
const LABEL_44681 = 'component_44681';
export function Component44681({ value = 44681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44681, 'data-value': derived.doubled }, children);
}
export default Component44681;
