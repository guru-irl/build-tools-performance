import React from 'react';
const LABEL_4138 = 'component_4138';
export function Component4138({ value = 4138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4138, 'data-value': derived.doubled }, children);
}
export default Component4138;
