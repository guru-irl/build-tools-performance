import React from 'react';
const LABEL_45189 = 'component_45189';
export function Component45189({ value = 45189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45189, 'data-value': derived.doubled }, children);
}
export default Component45189;
