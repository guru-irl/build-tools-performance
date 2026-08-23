import React from 'react';
const LABEL_11465 = 'component_11465';
export function Component11465({ value = 11465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11465, 'data-value': derived.doubled }, children);
}
export default Component11465;
