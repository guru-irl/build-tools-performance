import React from 'react';
const LABEL_20138 = 'component_20138';
export function Component20138({ value = 20138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20138, 'data-value': derived.doubled }, children);
}
export default Component20138;
