import React from 'react';
const LABEL_8770 = 'component_8770';
export function Component8770({ value = 8770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8770, 'data-value': derived.doubled }, children);
}
export default Component8770;
