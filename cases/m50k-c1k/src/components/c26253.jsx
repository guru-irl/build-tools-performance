import React from 'react';
const LABEL_26253 = 'component_26253';
export function Component26253({ value = 26253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26253, 'data-value': derived.doubled }, children);
}
export default Component26253;
