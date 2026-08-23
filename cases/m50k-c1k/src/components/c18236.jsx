import React from 'react';
const LABEL_18236 = 'component_18236';
export function Component18236({ value = 18236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18236, 'data-value': derived.doubled }, children);
}
export default Component18236;
