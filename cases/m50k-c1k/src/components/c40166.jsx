import React from 'react';
const LABEL_40166 = 'component_40166';
export function Component40166({ value = 40166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40166, 'data-value': derived.doubled }, children);
}
export default Component40166;
