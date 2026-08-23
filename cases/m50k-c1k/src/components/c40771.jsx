import React from 'react';
const LABEL_40771 = 'component_40771';
export function Component40771({ value = 40771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40771, 'data-value': derived.doubled }, children);
}
export default Component40771;
