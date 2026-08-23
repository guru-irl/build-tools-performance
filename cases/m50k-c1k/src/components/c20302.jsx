import React from 'react';
const LABEL_20302 = 'component_20302';
export function Component20302({ value = 20302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20302, 'data-value': derived.doubled }, children);
}
export default Component20302;
