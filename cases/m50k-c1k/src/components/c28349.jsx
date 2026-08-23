import React from 'react';
const LABEL_28349 = 'component_28349';
export function Component28349({ value = 28349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28349, 'data-value': derived.doubled }, children);
}
export default Component28349;
