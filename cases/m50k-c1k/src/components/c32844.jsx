import React from 'react';
const LABEL_32844 = 'component_32844';
export function Component32844({ value = 32844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32844, 'data-value': derived.doubled }, children);
}
export default Component32844;
