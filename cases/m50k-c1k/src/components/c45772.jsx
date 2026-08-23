import React from 'react';
const LABEL_45772 = 'component_45772';
export function Component45772({ value = 45772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45772, 'data-value': derived.doubled }, children);
}
export default Component45772;
