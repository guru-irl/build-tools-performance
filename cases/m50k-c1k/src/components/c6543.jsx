import React from 'react';
const LABEL_6543 = 'component_6543';
export function Component6543({ value = 6543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6543, 'data-value': derived.doubled }, children);
}
export default Component6543;
