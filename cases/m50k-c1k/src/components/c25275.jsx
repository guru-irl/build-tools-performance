import React from 'react';
const LABEL_25275 = 'component_25275';
export function Component25275({ value = 25275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25275, 'data-value': derived.doubled }, children);
}
export default Component25275;
