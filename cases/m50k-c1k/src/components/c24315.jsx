import React from 'react';
const LABEL_24315 = 'component_24315';
export function Component24315({ value = 24315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24315, 'data-value': derived.doubled }, children);
}
export default Component24315;
