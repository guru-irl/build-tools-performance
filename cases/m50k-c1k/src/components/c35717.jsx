import React from 'react';
const LABEL_35717 = 'component_35717';
export function Component35717({ value = 35717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35717, 'data-value': derived.doubled }, children);
}
export default Component35717;
