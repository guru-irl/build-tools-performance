import React from 'react';
const LABEL_43344 = 'component_43344';
export function Component43344({ value = 43344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43344, 'data-value': derived.doubled }, children);
}
export default Component43344;
