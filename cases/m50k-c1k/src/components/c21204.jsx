import React from 'react';
const LABEL_21204 = 'component_21204';
export function Component21204({ value = 21204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21204, 'data-value': derived.doubled }, children);
}
export default Component21204;
