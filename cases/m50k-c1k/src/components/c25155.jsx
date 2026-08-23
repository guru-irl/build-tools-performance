import React from 'react';
const LABEL_25155 = 'component_25155';
export function Component25155({ value = 25155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25155, 'data-value': derived.doubled }, children);
}
export default Component25155;
