import React from 'react';
const LABEL_45534 = 'component_45534';
export function Component45534({ value = 45534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45534, 'data-value': derived.doubled }, children);
}
export default Component45534;
