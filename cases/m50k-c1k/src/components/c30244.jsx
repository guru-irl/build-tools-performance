import React from 'react';
const LABEL_30244 = 'component_30244';
export function Component30244({ value = 30244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30244, 'data-value': derived.doubled }, children);
}
export default Component30244;
