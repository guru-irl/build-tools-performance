import React from 'react';
const LABEL_18828 = 'component_18828';
export function Component18828({ value = 18828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18828, 'data-value': derived.doubled }, children);
}
export default Component18828;
