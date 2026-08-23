import React from 'react';
const LABEL_14367 = 'component_14367';
export function Component14367({ value = 14367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14367, 'data-value': derived.doubled }, children);
}
export default Component14367;
