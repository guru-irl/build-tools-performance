import React from 'react';
const LABEL_16231 = 'component_16231';
export function Component16231({ value = 16231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16231, 'data-value': derived.doubled }, children);
}
export default Component16231;
