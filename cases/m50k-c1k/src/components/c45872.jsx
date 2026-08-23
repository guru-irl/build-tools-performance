import React from 'react';
const LABEL_45872 = 'component_45872';
export function Component45872({ value = 45872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45872, 'data-value': derived.doubled }, children);
}
export default Component45872;
