import React from 'react';
const LABEL_7770 = 'component_7770';
export function Component7770({ value = 7770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7770, 'data-value': derived.doubled }, children);
}
export default Component7770;
