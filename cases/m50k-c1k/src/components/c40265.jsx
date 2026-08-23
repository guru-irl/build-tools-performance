import React from 'react';
const LABEL_40265 = 'component_40265';
export function Component40265({ value = 40265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40265, 'data-value': derived.doubled }, children);
}
export default Component40265;
