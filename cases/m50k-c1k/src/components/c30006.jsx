import React from 'react';
const LABEL_30006 = 'component_30006';
export function Component30006({ value = 30006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30006, 'data-value': derived.doubled }, children);
}
export default Component30006;
