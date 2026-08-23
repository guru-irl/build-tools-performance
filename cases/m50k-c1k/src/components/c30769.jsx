import React from 'react';
const LABEL_30769 = 'component_30769';
export function Component30769({ value = 30769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30769, 'data-value': derived.doubled }, children);
}
export default Component30769;
