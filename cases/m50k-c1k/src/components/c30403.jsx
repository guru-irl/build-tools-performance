import React from 'react';
const LABEL_30403 = 'component_30403';
export function Component30403({ value = 30403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30403, 'data-value': derived.doubled }, children);
}
export default Component30403;
