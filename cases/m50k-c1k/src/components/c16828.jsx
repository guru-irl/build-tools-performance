import React from 'react';
const LABEL_16828 = 'component_16828';
export function Component16828({ value = 16828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16828, 'data-value': derived.doubled }, children);
}
export default Component16828;
