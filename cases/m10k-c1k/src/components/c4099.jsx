import React from 'react';
const LABEL_4099 = 'component_4099';
export function Component4099({ value = 4099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4099, 'data-value': derived.doubled }, children);
}
export default Component4099;
