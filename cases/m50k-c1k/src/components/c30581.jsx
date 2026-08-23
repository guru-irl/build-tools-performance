import React from 'react';
const LABEL_30581 = 'component_30581';
export function Component30581({ value = 30581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30581, 'data-value': derived.doubled }, children);
}
export default Component30581;
