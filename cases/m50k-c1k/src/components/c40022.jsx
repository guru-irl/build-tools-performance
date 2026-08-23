import React from 'react';
const LABEL_40022 = 'component_40022';
export function Component40022({ value = 40022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40022, 'data-value': derived.doubled }, children);
}
export default Component40022;
