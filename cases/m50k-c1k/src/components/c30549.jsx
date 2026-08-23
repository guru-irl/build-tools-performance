import React from 'react';
const LABEL_30549 = 'component_30549';
export function Component30549({ value = 30549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30549, 'data-value': derived.doubled }, children);
}
export default Component30549;
