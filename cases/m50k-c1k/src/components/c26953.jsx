import React from 'react';
const LABEL_26953 = 'component_26953';
export function Component26953({ value = 26953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26953, 'data-value': derived.doubled }, children);
}
export default Component26953;
