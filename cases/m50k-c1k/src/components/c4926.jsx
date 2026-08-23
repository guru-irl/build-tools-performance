import React from 'react';
const LABEL_4926 = 'component_4926';
export function Component4926({ value = 4926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4926, 'data-value': derived.doubled }, children);
}
export default Component4926;
