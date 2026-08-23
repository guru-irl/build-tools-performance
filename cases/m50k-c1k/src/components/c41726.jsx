import React from 'react';
const LABEL_41726 = 'component_41726';
export function Component41726({ value = 41726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41726, 'data-value': derived.doubled }, children);
}
export default Component41726;
