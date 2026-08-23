import React from 'react';
const LABEL_19780 = 'component_19780';
export function Component19780({ value = 19780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19780, 'data-value': derived.doubled }, children);
}
export default Component19780;
