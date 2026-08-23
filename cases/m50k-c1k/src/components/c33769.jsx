import React from 'react';
const LABEL_33769 = 'component_33769';
export function Component33769({ value = 33769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33769, 'data-value': derived.doubled }, children);
}
export default Component33769;
