import React from 'react';
const LABEL_42270 = 'component_42270';
export function Component42270({ value = 42270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42270, 'data-value': derived.doubled }, children);
}
export default Component42270;
