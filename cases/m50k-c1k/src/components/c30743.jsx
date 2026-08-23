import React from 'react';
const LABEL_30743 = 'component_30743';
export function Component30743({ value = 30743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30743, 'data-value': derived.doubled }, children);
}
export default Component30743;
