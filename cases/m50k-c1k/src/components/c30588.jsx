import React from 'react';
const LABEL_30588 = 'component_30588';
export function Component30588({ value = 30588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30588, 'data-value': derived.doubled }, children);
}
export default Component30588;
