import React from 'react';
const LABEL_42155 = 'component_42155';
export function Component42155({ value = 42155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42155, 'data-value': derived.doubled }, children);
}
export default Component42155;
