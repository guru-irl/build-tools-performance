import React from 'react';
const LABEL_35180 = 'component_35180';
export function Component35180({ value = 35180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35180, 'data-value': derived.doubled }, children);
}
export default Component35180;
