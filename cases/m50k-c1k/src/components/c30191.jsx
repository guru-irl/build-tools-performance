import React from 'react';
const LABEL_30191 = 'component_30191';
export function Component30191({ value = 30191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30191, 'data-value': derived.doubled }, children);
}
export default Component30191;
