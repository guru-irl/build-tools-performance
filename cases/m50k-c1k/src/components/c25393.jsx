import React from 'react';
const LABEL_25393 = 'component_25393';
export function Component25393({ value = 25393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25393, 'data-value': derived.doubled }, children);
}
export default Component25393;
