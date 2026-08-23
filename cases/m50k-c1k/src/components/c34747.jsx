import React from 'react';
const LABEL_34747 = 'component_34747';
export function Component34747({ value = 34747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34747, 'data-value': derived.doubled }, children);
}
export default Component34747;
