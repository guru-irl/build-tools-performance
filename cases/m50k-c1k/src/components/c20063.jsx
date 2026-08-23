import React from 'react';
const LABEL_20063 = 'component_20063';
export function Component20063({ value = 20063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20063, 'data-value': derived.doubled }, children);
}
export default Component20063;
