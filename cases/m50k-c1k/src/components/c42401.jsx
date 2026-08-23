import React from 'react';
const LABEL_42401 = 'component_42401';
export function Component42401({ value = 42401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42401, 'data-value': derived.doubled }, children);
}
export default Component42401;
