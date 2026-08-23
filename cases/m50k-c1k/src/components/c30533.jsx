import React from 'react';
const LABEL_30533 = 'component_30533';
export function Component30533({ value = 30533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30533, 'data-value': derived.doubled }, children);
}
export default Component30533;
