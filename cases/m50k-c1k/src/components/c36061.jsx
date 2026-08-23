import React from 'react';
const LABEL_36061 = 'component_36061';
export function Component36061({ value = 36061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36061, 'data-value': derived.doubled }, children);
}
export default Component36061;
