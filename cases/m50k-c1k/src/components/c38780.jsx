import React from 'react';
const LABEL_38780 = 'component_38780';
export function Component38780({ value = 38780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38780, 'data-value': derived.doubled }, children);
}
export default Component38780;
