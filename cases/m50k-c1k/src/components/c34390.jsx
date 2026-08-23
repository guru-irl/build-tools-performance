import React from 'react';
const LABEL_34390 = 'component_34390';
export function Component34390({ value = 34390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34390, 'data-value': derived.doubled }, children);
}
export default Component34390;
