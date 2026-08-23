import React from 'react';
const LABEL_35543 = 'component_35543';
export function Component35543({ value = 35543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35543, 'data-value': derived.doubled }, children);
}
export default Component35543;
