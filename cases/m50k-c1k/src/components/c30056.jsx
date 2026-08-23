import React from 'react';
const LABEL_30056 = 'component_30056';
export function Component30056({ value = 30056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30056, 'data-value': derived.doubled }, children);
}
export default Component30056;
