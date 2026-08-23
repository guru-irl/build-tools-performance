import React from 'react';
const LABEL_26155 = 'component_26155';
export function Component26155({ value = 26155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26155, 'data-value': derived.doubled }, children);
}
export default Component26155;
