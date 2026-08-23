import React from 'react';
const LABEL_19857 = 'component_19857';
export function Component19857({ value = 19857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19857, 'data-value': derived.doubled }, children);
}
export default Component19857;
