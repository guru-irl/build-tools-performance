import React from 'react';
const LABEL_46730 = 'component_46730';
export function Component46730({ value = 46730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46730, 'data-value': derived.doubled }, children);
}
export default Component46730;
