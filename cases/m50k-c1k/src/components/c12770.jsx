import React from 'react';
const LABEL_12770 = 'component_12770';
export function Component12770({ value = 12770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12770, 'data-value': derived.doubled }, children);
}
export default Component12770;
