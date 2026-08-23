import React from 'react';
const LABEL_30367 = 'component_30367';
export function Component30367({ value = 30367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30367, 'data-value': derived.doubled }, children);
}
export default Component30367;
