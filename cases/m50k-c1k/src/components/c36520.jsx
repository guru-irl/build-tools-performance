import React from 'react';
const LABEL_36520 = 'component_36520';
export function Component36520({ value = 36520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36520, 'data-value': derived.doubled }, children);
}
export default Component36520;
