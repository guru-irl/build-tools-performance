import React from 'react';
const LABEL_24456 = 'component_24456';
export function Component24456({ value = 24456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24456, 'data-value': derived.doubled }, children);
}
export default Component24456;
