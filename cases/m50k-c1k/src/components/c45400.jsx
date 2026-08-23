import React from 'react';
const LABEL_45400 = 'component_45400';
export function Component45400({ value = 45400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45400, 'data-value': derived.doubled }, children);
}
export default Component45400;
