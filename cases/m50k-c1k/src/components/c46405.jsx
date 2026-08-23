import React from 'react';
const LABEL_46405 = 'component_46405';
export function Component46405({ value = 46405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46405, 'data-value': derived.doubled }, children);
}
export default Component46405;
