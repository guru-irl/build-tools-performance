import React from 'react';
const LABEL_42393 = 'component_42393';
export function Component42393({ value = 42393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42393, 'data-value': derived.doubled }, children);
}
export default Component42393;
