import React from 'react';
const LABEL_840 = 'component_840';
export function Component840({ value = 840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_840, 'data-value': derived.doubled }, children);
}
export default Component840;
