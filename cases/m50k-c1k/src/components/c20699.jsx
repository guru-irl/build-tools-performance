import React from 'react';
const LABEL_20699 = 'component_20699';
export function Component20699({ value = 20699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20699, 'data-value': derived.doubled }, children);
}
export default Component20699;
