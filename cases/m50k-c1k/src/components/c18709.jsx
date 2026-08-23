import React from 'react';
const LABEL_18709 = 'component_18709';
export function Component18709({ value = 18709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18709, 'data-value': derived.doubled }, children);
}
export default Component18709;
