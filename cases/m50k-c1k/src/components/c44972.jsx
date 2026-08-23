import React from 'react';
const LABEL_44972 = 'component_44972';
export function Component44972({ value = 44972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44972, 'data-value': derived.doubled }, children);
}
export default Component44972;
