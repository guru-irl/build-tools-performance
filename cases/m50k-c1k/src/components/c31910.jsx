import React from 'react';
const LABEL_31910 = 'component_31910';
export function Component31910({ value = 31910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31910, 'data-value': derived.doubled }, children);
}
export default Component31910;
