import React from 'react';
const LABEL_45725 = 'component_45725';
export function Component45725({ value = 45725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45725, 'data-value': derived.doubled }, children);
}
export default Component45725;
