import React from 'react';
const LABEL_5828 = 'component_5828';
export function Component5828({ value = 5828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5828, 'data-value': derived.doubled }, children);
}
export default Component5828;
