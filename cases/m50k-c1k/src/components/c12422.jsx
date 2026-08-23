import React from 'react';
const LABEL_12422 = 'component_12422';
export function Component12422({ value = 12422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12422, 'data-value': derived.doubled }, children);
}
export default Component12422;
