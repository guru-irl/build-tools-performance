import React from 'react';
const LABEL_45530 = 'component_45530';
export function Component45530({ value = 45530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45530, 'data-value': derived.doubled }, children);
}
export default Component45530;
