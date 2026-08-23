import React from 'react';
const LABEL_12543 = 'component_12543';
export function Component12543({ value = 12543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12543, 'data-value': derived.doubled }, children);
}
export default Component12543;
