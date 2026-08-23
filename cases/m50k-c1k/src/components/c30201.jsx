import React from 'react';
const LABEL_30201 = 'component_30201';
export function Component30201({ value = 30201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30201, 'data-value': derived.doubled }, children);
}
export default Component30201;
