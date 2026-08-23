import React from 'react';
const LABEL_20868 = 'component_20868';
export function Component20868({ value = 20868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20868, 'data-value': derived.doubled }, children);
}
export default Component20868;
