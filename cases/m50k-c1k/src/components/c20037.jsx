import React from 'react';
const LABEL_20037 = 'component_20037';
export function Component20037({ value = 20037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20037, 'data-value': derived.doubled }, children);
}
export default Component20037;
