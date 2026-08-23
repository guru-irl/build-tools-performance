import React from 'react';
const LABEL_45405 = 'component_45405';
export function Component45405({ value = 45405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45405, 'data-value': derived.doubled }, children);
}
export default Component45405;
