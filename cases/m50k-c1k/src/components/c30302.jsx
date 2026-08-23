import React from 'react';
const LABEL_30302 = 'component_30302';
export function Component30302({ value = 30302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30302, 'data-value': derived.doubled }, children);
}
export default Component30302;
