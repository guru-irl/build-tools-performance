import React from 'react';
const LABEL_45645 = 'component_45645';
export function Component45645({ value = 45645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45645, 'data-value': derived.doubled }, children);
}
export default Component45645;
