import React from 'react';
const LABEL_18303 = 'component_18303';
export function Component18303({ value = 18303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18303, 'data-value': derived.doubled }, children);
}
export default Component18303;
