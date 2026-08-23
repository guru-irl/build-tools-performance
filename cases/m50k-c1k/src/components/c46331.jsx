import React from 'react';
const LABEL_46331 = 'component_46331';
export function Component46331({ value = 46331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46331, 'data-value': derived.doubled }, children);
}
export default Component46331;
