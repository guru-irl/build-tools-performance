import React from 'react';
const LABEL_4725 = 'component_4725';
export function Component4725({ value = 4725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4725, 'data-value': derived.doubled }, children);
}
export default Component4725;
