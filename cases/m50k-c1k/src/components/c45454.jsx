import React from 'react';
const LABEL_45454 = 'component_45454';
export function Component45454({ value = 45454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45454, 'data-value': derived.doubled }, children);
}
export default Component45454;
