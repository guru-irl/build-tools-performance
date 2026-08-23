import React from 'react';
const LABEL_19331 = 'component_19331';
export function Component19331({ value = 19331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19331, 'data-value': derived.doubled }, children);
}
export default Component19331;
