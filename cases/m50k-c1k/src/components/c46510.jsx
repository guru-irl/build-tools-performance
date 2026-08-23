import React from 'react';
const LABEL_46510 = 'component_46510';
export function Component46510({ value = 46510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46510, 'data-value': derived.doubled }, children);
}
export default Component46510;
