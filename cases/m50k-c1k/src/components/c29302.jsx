import React from 'react';
const LABEL_29302 = 'component_29302';
export function Component29302({ value = 29302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29302, 'data-value': derived.doubled }, children);
}
export default Component29302;
