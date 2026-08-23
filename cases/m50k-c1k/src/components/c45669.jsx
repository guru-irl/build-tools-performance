import React from 'react';
const LABEL_45669 = 'component_45669';
export function Component45669({ value = 45669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45669, 'data-value': derived.doubled }, children);
}
export default Component45669;
