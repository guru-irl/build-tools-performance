import React from 'react';
const LABEL_43373 = 'component_43373';
export function Component43373({ value = 43373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43373, 'data-value': derived.doubled }, children);
}
export default Component43373;
