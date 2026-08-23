import React from 'react';
const LABEL_28422 = 'component_28422';
export function Component28422({ value = 28422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28422, 'data-value': derived.doubled }, children);
}
export default Component28422;
