import React from 'react';
const LABEL_24078 = 'component_24078';
export function Component24078({ value = 24078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24078, 'data-value': derived.doubled }, children);
}
export default Component24078;
