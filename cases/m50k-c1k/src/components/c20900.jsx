import React from 'react';
const LABEL_20900 = 'component_20900';
export function Component20900({ value = 20900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20900, 'data-value': derived.doubled }, children);
}
export default Component20900;
