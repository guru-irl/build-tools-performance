import React from 'react';
const LABEL_43117 = 'component_43117';
export function Component43117({ value = 43117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43117, 'data-value': derived.doubled }, children);
}
export default Component43117;
