import React from 'react';
const LABEL_6926 = 'component_6926';
export function Component6926({ value = 6926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6926, 'data-value': derived.doubled }, children);
}
export default Component6926;
