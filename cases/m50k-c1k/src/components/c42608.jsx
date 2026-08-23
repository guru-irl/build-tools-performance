import React from 'react';
const LABEL_42608 = 'component_42608';
export function Component42608({ value = 42608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42608, 'data-value': derived.doubled }, children);
}
export default Component42608;
