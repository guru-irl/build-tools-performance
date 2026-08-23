import React from 'react';
const LABEL_4780 = 'component_4780';
export function Component4780({ value = 4780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4780, 'data-value': derived.doubled }, children);
}
export default Component4780;
