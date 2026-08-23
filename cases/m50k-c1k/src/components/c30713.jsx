import React from 'react';
const LABEL_30713 = 'component_30713';
export function Component30713({ value = 30713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30713, 'data-value': derived.doubled }, children);
}
export default Component30713;
