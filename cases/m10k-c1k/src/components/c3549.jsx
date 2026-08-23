import React from 'react';
const LABEL_3549 = 'component_3549';
export function Component3549({ value = 3549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3549, 'data-value': derived.doubled }, children);
}
export default Component3549;
