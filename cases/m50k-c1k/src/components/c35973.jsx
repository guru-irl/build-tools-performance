import React from 'react';
const LABEL_35973 = 'component_35973';
export function Component35973({ value = 35973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35973, 'data-value': derived.doubled }, children);
}
export default Component35973;
