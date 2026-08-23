import React from 'react';
const LABEL_30775 = 'component_30775';
export function Component30775({ value = 30775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30775, 'data-value': derived.doubled }, children);
}
export default Component30775;
