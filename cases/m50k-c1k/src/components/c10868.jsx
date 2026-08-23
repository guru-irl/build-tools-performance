import React from 'react';
const LABEL_10868 = 'component_10868';
export function Component10868({ value = 10868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10868, 'data-value': derived.doubled }, children);
}
export default Component10868;
