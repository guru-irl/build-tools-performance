import React from 'react';
const LABEL_7138 = 'component_7138';
export function Component7138({ value = 7138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7138, 'data-value': derived.doubled }, children);
}
export default Component7138;
