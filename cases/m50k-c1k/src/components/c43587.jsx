import React from 'react';
const LABEL_43587 = 'component_43587';
export function Component43587({ value = 43587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43587, 'data-value': derived.doubled }, children);
}
export default Component43587;
