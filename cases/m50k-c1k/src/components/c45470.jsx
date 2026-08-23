import React from 'react';
const LABEL_45470 = 'component_45470';
export function Component45470({ value = 45470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45470, 'data-value': derived.doubled }, children);
}
export default Component45470;
