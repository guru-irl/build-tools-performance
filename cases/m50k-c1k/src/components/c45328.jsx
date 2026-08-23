import React from 'react';
const LABEL_45328 = 'component_45328';
export function Component45328({ value = 45328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45328, 'data-value': derived.doubled }, children);
}
export default Component45328;
