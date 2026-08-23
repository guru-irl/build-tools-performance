import React from 'react';
const LABEL_40325 = 'component_40325';
export function Component40325({ value = 40325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40325, 'data-value': derived.doubled }, children);
}
export default Component40325;
