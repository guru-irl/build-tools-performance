import React from 'react';
const LABEL_11844 = 'component_11844';
export function Component11844({ value = 11844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11844, 'data-value': derived.doubled }, children);
}
export default Component11844;
