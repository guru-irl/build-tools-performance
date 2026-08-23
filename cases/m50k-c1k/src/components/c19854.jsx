import React from 'react';
const LABEL_19854 = 'component_19854';
export function Component19854({ value = 19854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19854, 'data-value': derived.doubled }, children);
}
export default Component19854;
