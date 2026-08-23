import React from 'react';
const LABEL_30554 = 'component_30554';
export function Component30554({ value = 30554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30554, 'data-value': derived.doubled }, children);
}
export default Component30554;
