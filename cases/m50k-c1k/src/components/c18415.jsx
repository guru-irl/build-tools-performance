import React from 'react';
const LABEL_18415 = 'component_18415';
export function Component18415({ value = 18415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18415, 'data-value': derived.doubled }, children);
}
export default Component18415;
