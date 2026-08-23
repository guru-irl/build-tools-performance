import React from 'react';
const LABEL_45512 = 'component_45512';
export function Component45512({ value = 45512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45512, 'data-value': derived.doubled }, children);
}
export default Component45512;
