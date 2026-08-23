import React from 'react';
const LABEL_40926 = 'component_40926';
export function Component40926({ value = 40926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40926, 'data-value': derived.doubled }, children);
}
export default Component40926;
