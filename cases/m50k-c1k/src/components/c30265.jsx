import React from 'react';
const LABEL_30265 = 'component_30265';
export function Component30265({ value = 30265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30265, 'data-value': derived.doubled }, children);
}
export default Component30265;
