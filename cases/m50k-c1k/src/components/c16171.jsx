import React from 'react';
const LABEL_16171 = 'component_16171';
export function Component16171({ value = 16171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16171, 'data-value': derived.doubled }, children);
}
export default Component16171;
