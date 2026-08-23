import React from 'react';
const LABEL_23735 = 'component_23735';
export function Component23735({ value = 23735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23735, 'data-value': derived.doubled }, children);
}
export default Component23735;
