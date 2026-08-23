import React from 'react';
const LABEL_45349 = 'component_45349';
export function Component45349({ value = 45349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45349, 'data-value': derived.doubled }, children);
}
export default Component45349;
