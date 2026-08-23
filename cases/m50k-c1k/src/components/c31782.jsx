import React from 'react';
const LABEL_31782 = 'component_31782';
export function Component31782({ value = 31782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31782, 'data-value': derived.doubled }, children);
}
export default Component31782;
