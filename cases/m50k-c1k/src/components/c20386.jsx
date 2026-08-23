import React from 'react';
const LABEL_20386 = 'component_20386';
export function Component20386({ value = 20386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20386, 'data-value': derived.doubled }, children);
}
export default Component20386;
