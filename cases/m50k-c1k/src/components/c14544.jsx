import React from 'react';
const LABEL_14544 = 'component_14544';
export function Component14544({ value = 14544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14544, 'data-value': derived.doubled }, children);
}
export default Component14544;
