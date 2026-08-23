import React from 'react';
const LABEL_42172 = 'component_42172';
export function Component42172({ value = 42172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42172, 'data-value': derived.doubled }, children);
}
export default Component42172;
