import React from 'react';
const LABEL_24816 = 'component_24816';
export function Component24816({ value = 24816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24816, 'data-value': derived.doubled }, children);
}
export default Component24816;
