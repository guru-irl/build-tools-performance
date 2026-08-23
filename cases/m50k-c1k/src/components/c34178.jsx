import React from 'react';
const LABEL_34178 = 'component_34178';
export function Component34178({ value = 34178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34178, 'data-value': derived.doubled }, children);
}
export default Component34178;
