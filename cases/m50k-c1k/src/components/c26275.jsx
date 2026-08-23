import React from 'react';
const LABEL_26275 = 'component_26275';
export function Component26275({ value = 26275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26275, 'data-value': derived.doubled }, children);
}
export default Component26275;
