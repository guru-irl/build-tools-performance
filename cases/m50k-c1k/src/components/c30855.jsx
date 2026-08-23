import React from 'react';
const LABEL_30855 = 'component_30855';
export function Component30855({ value = 30855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30855, 'data-value': derived.doubled }, children);
}
export default Component30855;
