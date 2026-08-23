import React from 'react';
const LABEL_35015 = 'component_35015';
export function Component35015({ value = 35015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35015, 'data-value': derived.doubled }, children);
}
export default Component35015;
