import React from 'react';
const LABEL_18088 = 'component_18088';
export function Component18088({ value = 18088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18088, 'data-value': derived.doubled }, children);
}
export default Component18088;
