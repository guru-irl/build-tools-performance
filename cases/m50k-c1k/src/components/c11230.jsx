import React from 'react';
const LABEL_11230 = 'component_11230';
export function Component11230({ value = 11230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11230, 'data-value': derived.doubled }, children);
}
export default Component11230;
