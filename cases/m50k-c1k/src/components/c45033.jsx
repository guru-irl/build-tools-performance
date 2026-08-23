import React from 'react';
const LABEL_45033 = 'component_45033';
export function Component45033({ value = 45033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45033, 'data-value': derived.doubled }, children);
}
export default Component45033;
