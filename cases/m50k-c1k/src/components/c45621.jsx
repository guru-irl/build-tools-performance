import React from 'react';
const LABEL_45621 = 'component_45621';
export function Component45621({ value = 45621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45621, 'data-value': derived.doubled }, children);
}
export default Component45621;
