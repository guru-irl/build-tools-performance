import React from 'react';
const LABEL_30297 = 'component_30297';
export function Component30297({ value = 30297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30297, 'data-value': derived.doubled }, children);
}
export default Component30297;
