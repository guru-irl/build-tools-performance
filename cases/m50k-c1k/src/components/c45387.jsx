import React from 'react';
const LABEL_45387 = 'component_45387';
export function Component45387({ value = 45387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45387, 'data-value': derived.doubled }, children);
}
export default Component45387;
