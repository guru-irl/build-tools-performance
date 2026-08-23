import React from 'react';
const LABEL_26367 = 'component_26367';
export function Component26367({ value = 26367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26367, 'data-value': derived.doubled }, children);
}
export default Component26367;
