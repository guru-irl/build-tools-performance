import React from 'react';
const LABEL_11395 = 'component_11395';
export function Component11395({ value = 11395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11395, 'data-value': derived.doubled }, children);
}
export default Component11395;
