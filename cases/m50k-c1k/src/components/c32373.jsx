import React from 'react';
const LABEL_32373 = 'component_32373';
export function Component32373({ value = 32373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32373, 'data-value': derived.doubled }, children);
}
export default Component32373;
