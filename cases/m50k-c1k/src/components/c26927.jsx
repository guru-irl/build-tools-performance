import React from 'react';
const LABEL_26927 = 'component_26927';
export function Component26927({ value = 26927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26927, 'data-value': derived.doubled }, children);
}
export default Component26927;
