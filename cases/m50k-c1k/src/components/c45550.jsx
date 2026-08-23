import React from 'react';
const LABEL_45550 = 'component_45550';
export function Component45550({ value = 45550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45550, 'data-value': derived.doubled }, children);
}
export default Component45550;
