import React from 'react';
const LABEL_45061 = 'component_45061';
export function Component45061({ value = 45061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45061, 'data-value': derived.doubled }, children);
}
export default Component45061;
