import React from 'react';
const LABEL_24340 = 'component_24340';
export function Component24340({ value = 24340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24340, 'data-value': derived.doubled }, children);
}
export default Component24340;
