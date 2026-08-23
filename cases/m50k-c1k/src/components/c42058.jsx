import React from 'react';
const LABEL_42058 = 'component_42058';
export function Component42058({ value = 42058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42058, 'data-value': derived.doubled }, children);
}
export default Component42058;
