import React from 'react';
const LABEL_25008 = 'component_25008';
export function Component25008({ value = 25008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25008, 'data-value': derived.doubled }, children);
}
export default Component25008;
