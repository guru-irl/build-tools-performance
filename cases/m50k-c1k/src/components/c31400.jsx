import React from 'react';
const LABEL_31400 = 'component_31400';
export function Component31400({ value = 31400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31400, 'data-value': derived.doubled }, children);
}
export default Component31400;
