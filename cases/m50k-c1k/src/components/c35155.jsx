import React from 'react';
const LABEL_35155 = 'component_35155';
export function Component35155({ value = 35155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35155, 'data-value': derived.doubled }, children);
}
export default Component35155;
