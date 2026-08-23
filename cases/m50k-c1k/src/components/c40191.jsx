import React from 'react';
const LABEL_40191 = 'component_40191';
export function Component40191({ value = 40191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40191, 'data-value': derived.doubled }, children);
}
export default Component40191;
