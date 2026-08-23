import React from 'react';
const LABEL_45543 = 'component_45543';
export function Component45543({ value = 45543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45543, 'data-value': derived.doubled }, children);
}
export default Component45543;
