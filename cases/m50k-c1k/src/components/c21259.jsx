import React from 'react';
const LABEL_21259 = 'component_21259';
export function Component21259({ value = 21259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21259, 'data-value': derived.doubled }, children);
}
export default Component21259;
