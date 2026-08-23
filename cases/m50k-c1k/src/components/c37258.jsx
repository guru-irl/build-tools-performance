import React from 'react';
const LABEL_37258 = 'component_37258';
export function Component37258({ value = 37258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37258, 'data-value': derived.doubled }, children);
}
export default Component37258;
