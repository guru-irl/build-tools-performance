import React from 'react';
const LABEL_20120 = 'component_20120';
export function Component20120({ value = 20120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20120, 'data-value': derived.doubled }, children);
}
export default Component20120;
