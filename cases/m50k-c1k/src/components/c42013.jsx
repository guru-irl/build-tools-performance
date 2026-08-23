import React from 'react';
const LABEL_42013 = 'component_42013';
export function Component42013({ value = 42013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42013, 'data-value': derived.doubled }, children);
}
export default Component42013;
