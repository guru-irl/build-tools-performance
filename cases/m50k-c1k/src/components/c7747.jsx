import React from 'react';
const LABEL_7747 = 'component_7747';
export function Component7747({ value = 7747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7747, 'data-value': derived.doubled }, children);
}
export default Component7747;
