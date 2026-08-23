import React from 'react';
const LABEL_41155 = 'component_41155';
export function Component41155({ value = 41155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41155, 'data-value': derived.doubled }, children);
}
export default Component41155;
