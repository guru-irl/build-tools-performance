import React from 'react';
const LABEL_41985 = 'component_41985';
export function Component41985({ value = 41985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41985, 'data-value': derived.doubled }, children);
}
export default Component41985;
