import React from 'react';
const LABEL_13828 = 'component_13828';
export function Component13828({ value = 13828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13828, 'data-value': derived.doubled }, children);
}
export default Component13828;
