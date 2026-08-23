import React from 'react';
const LABEL_35952 = 'component_35952';
export function Component35952({ value = 35952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35952, 'data-value': derived.doubled }, children);
}
export default Component35952;
