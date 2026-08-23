import React from 'react';
const LABEL_46796 = 'component_46796';
export function Component46796({ value = 46796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46796, 'data-value': derived.doubled }, children);
}
export default Component46796;
