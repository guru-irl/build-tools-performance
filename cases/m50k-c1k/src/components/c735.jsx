import React from 'react';
const LABEL_735 = 'component_735';
export function Component735({ value = 735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_735, 'data-value': derived.doubled }, children);
}
export default Component735;
