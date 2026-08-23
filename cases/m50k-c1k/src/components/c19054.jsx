import React from 'react';
const LABEL_19054 = 'component_19054';
export function Component19054({ value = 19054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19054, 'data-value': derived.doubled }, children);
}
export default Component19054;
