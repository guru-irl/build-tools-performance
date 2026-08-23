import React from 'react';
const LABEL_46298 = 'component_46298';
export function Component46298({ value = 46298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46298, 'data-value': derived.doubled }, children);
}
export default Component46298;
