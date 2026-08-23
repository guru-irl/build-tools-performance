import React from 'react';
const LABEL_30444 = 'component_30444';
export function Component30444({ value = 30444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30444, 'data-value': derived.doubled }, children);
}
export default Component30444;
