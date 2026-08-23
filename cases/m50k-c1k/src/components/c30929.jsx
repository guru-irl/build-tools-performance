import React from 'react';
const LABEL_30929 = 'component_30929';
export function Component30929({ value = 30929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30929, 'data-value': derived.doubled }, children);
}
export default Component30929;
