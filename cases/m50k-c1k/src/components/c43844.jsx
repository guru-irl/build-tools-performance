import React from 'react';
const LABEL_43844 = 'component_43844';
export function Component43844({ value = 43844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43844, 'data-value': derived.doubled }, children);
}
export default Component43844;
