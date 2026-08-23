import React from 'react';
const LABEL_30010 = 'component_30010';
export function Component30010({ value = 30010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30010, 'data-value': derived.doubled }, children);
}
export default Component30010;
