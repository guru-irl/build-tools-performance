import React from 'react';
const LABEL_31543 = 'component_31543';
export function Component31543({ value = 31543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31543, 'data-value': derived.doubled }, children);
}
export default Component31543;
