import React from 'react';
const LABEL_45019 = 'component_45019';
export function Component45019({ value = 45019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45019, 'data-value': derived.doubled }, children);
}
export default Component45019;
