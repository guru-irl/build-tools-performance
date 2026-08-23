import React from 'react';
const LABEL_28173 = 'component_28173';
export function Component28173({ value = 28173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28173, 'data-value': derived.doubled }, children);
}
export default Component28173;
