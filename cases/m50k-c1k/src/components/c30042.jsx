import React from 'react';
const LABEL_30042 = 'component_30042';
export function Component30042({ value = 30042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30042, 'data-value': derived.doubled }, children);
}
export default Component30042;
