import React from 'react';
const LABEL_40063 = 'component_40063';
export function Component40063({ value = 40063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40063, 'data-value': derived.doubled }, children);
}
export default Component40063;
