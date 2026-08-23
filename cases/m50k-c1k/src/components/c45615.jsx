import React from 'react';
const LABEL_45615 = 'component_45615';
export function Component45615({ value = 45615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45615, 'data-value': derived.doubled }, children);
}
export default Component45615;
