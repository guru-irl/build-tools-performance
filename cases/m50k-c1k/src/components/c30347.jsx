import React from 'react';
const LABEL_30347 = 'component_30347';
export function Component30347({ value = 30347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30347, 'data-value': derived.doubled }, children);
}
export default Component30347;
