import React from 'react';
const LABEL_34422 = 'component_34422';
export function Component34422({ value = 34422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34422, 'data-value': derived.doubled }, children);
}
export default Component34422;
