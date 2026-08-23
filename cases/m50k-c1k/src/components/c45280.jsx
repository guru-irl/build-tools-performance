import React from 'react';
const LABEL_45280 = 'component_45280';
export function Component45280({ value = 45280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45280, 'data-value': derived.doubled }, children);
}
export default Component45280;
