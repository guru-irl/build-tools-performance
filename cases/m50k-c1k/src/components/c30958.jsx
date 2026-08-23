import React from 'react';
const LABEL_30958 = 'component_30958';
export function Component30958({ value = 30958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30958, 'data-value': derived.doubled }, children);
}
export default Component30958;
