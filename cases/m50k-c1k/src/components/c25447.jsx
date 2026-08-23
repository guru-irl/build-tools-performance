import React from 'react';
const LABEL_25447 = 'component_25447';
export function Component25447({ value = 25447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25447, 'data-value': derived.doubled }, children);
}
export default Component25447;
