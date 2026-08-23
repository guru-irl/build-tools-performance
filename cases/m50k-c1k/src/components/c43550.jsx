import React from 'react';
const LABEL_43550 = 'component_43550';
export function Component43550({ value = 43550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43550, 'data-value': derived.doubled }, children);
}
export default Component43550;
