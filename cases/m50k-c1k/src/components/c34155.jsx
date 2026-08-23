import React from 'react';
const LABEL_34155 = 'component_34155';
export function Component34155({ value = 34155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34155, 'data-value': derived.doubled }, children);
}
export default Component34155;
