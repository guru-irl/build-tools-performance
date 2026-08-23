import React from 'react';
const LABEL_25831 = 'component_25831';
export function Component25831({ value = 25831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25831, 'data-value': derived.doubled }, children);
}
export default Component25831;
