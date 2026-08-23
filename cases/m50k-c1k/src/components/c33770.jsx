import React from 'react';
const LABEL_33770 = 'component_33770';
export function Component33770({ value = 33770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33770, 'data-value': derived.doubled }, children);
}
export default Component33770;
