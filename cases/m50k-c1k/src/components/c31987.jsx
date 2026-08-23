import React from 'react';
const LABEL_31987 = 'component_31987';
export function Component31987({ value = 31987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31987, 'data-value': derived.doubled }, children);
}
export default Component31987;
