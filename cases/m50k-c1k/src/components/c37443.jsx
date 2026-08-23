import React from 'react';
const LABEL_37443 = 'component_37443';
export function Component37443({ value = 37443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37443, 'data-value': derived.doubled }, children);
}
export default Component37443;
