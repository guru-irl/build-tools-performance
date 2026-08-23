import React from 'react';
const LABEL_25443 = 'component_25443';
export function Component25443({ value = 25443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25443, 'data-value': derived.doubled }, children);
}
export default Component25443;
