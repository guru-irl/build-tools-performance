import React from 'react';
const LABEL_45331 = 'component_45331';
export function Component45331({ value = 45331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45331, 'data-value': derived.doubled }, children);
}
export default Component45331;
