import React from 'react';
const LABEL_9844 = 'component_9844';
export function Component9844({ value = 9844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9844, 'data-value': derived.doubled }, children);
}
export default Component9844;
