import React from 'react';
const LABEL_33543 = 'component_33543';
export function Component33543({ value = 33543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33543, 'data-value': derived.doubled }, children);
}
export default Component33543;
