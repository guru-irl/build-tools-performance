import React from 'react';
const LABEL_19860 = 'component_19860';
export function Component19860({ value = 19860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19860, 'data-value': derived.doubled }, children);
}
export default Component19860;
