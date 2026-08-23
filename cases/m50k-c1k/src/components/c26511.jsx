import React from 'react';
const LABEL_26511 = 'component_26511';
export function Component26511({ value = 26511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26511, 'data-value': derived.doubled }, children);
}
export default Component26511;
