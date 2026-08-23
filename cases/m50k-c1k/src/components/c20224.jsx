import React from 'react';
const LABEL_20224 = 'component_20224';
export function Component20224({ value = 20224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20224, 'data-value': derived.doubled }, children);
}
export default Component20224;
