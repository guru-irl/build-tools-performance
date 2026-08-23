import React from 'react';
const LABEL_41018 = 'component_41018';
export function Component41018({ value = 41018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41018, 'data-value': derived.doubled }, children);
}
export default Component41018;
