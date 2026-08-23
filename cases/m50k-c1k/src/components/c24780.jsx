import React from 'react';
const LABEL_24780 = 'component_24780';
export function Component24780({ value = 24780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24780, 'data-value': derived.doubled }, children);
}
export default Component24780;
