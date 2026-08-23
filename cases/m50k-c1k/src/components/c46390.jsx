import React from 'react';
const LABEL_46390 = 'component_46390';
export function Component46390({ value = 46390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46390, 'data-value': derived.doubled }, children);
}
export default Component46390;
