import React from 'react';
const LABEL_19828 = 'component_19828';
export function Component19828({ value = 19828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19828, 'data-value': derived.doubled }, children);
}
export default Component19828;
