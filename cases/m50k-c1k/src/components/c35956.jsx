import React from 'react';
const LABEL_35956 = 'component_35956';
export function Component35956({ value = 35956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35956, 'data-value': derived.doubled }, children);
}
export default Component35956;
