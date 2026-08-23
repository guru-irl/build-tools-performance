import React from 'react';
const LABEL_45195 = 'component_45195';
export function Component45195({ value = 45195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45195, 'data-value': derived.doubled }, children);
}
export default Component45195;
