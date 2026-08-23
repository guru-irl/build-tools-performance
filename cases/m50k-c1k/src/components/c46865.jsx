import React from 'react';
const LABEL_46865 = 'component_46865';
export function Component46865({ value = 46865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46865, 'data-value': derived.doubled }, children);
}
export default Component46865;
