import React from 'react';
const LABEL_44691 = 'component_44691';
export function Component44691({ value = 44691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44691, 'data-value': derived.doubled }, children);
}
export default Component44691;
