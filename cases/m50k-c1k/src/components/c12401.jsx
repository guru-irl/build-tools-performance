import React from 'react';
const LABEL_12401 = 'component_12401';
export function Component12401({ value = 12401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12401, 'data-value': derived.doubled }, children);
}
export default Component12401;
