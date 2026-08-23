import React from 'react';
const LABEL_34044 = 'component_34044';
export function Component34044({ value = 34044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34044, 'data-value': derived.doubled }, children);
}
export default Component34044;
