import React from 'react';
const LABEL_18726 = 'component_18726';
export function Component18726({ value = 18726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18726, 'data-value': derived.doubled }, children);
}
export default Component18726;
