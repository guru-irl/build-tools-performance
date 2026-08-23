import React from 'react';
const LABEL_30561 = 'component_30561';
export function Component30561({ value = 30561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30561, 'data-value': derived.doubled }, children);
}
export default Component30561;
