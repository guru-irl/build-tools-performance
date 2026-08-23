import React from 'react';
const LABEL_20543 = 'component_20543';
export function Component20543({ value = 20543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20543, 'data-value': derived.doubled }, children);
}
export default Component20543;
