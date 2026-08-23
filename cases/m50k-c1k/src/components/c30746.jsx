import React from 'react';
const LABEL_30746 = 'component_30746';
export function Component30746({ value = 30746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30746, 'data-value': derived.doubled }, children);
}
export default Component30746;
