import React from 'react';
const LABEL_30896 = 'component_30896';
export function Component30896({ value = 30896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30896, 'data-value': derived.doubled }, children);
}
export default Component30896;
