import React from 'react';
const LABEL_4155 = 'component_4155';
export function Component4155({ value = 4155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4155, 'data-value': derived.doubled }, children);
}
export default Component4155;
