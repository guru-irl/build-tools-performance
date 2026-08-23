import React from 'react';
const LABEL_40138 = 'component_40138';
export function Component40138({ value = 40138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40138, 'data-value': derived.doubled }, children);
}
export default Component40138;
