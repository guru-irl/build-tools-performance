import React from 'react';
const LABEL_10726 = 'component_10726';
export function Component10726({ value = 10726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10726, 'data-value': derived.doubled }, children);
}
export default Component10726;
