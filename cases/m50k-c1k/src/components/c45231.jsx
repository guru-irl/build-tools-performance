import React from 'react';
const LABEL_45231 = 'component_45231';
export function Component45231({ value = 45231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45231, 'data-value': derived.doubled }, children);
}
export default Component45231;
