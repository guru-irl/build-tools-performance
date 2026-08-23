import React from 'react';
const LABEL_14022 = 'component_14022';
export function Component14022({ value = 14022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14022, 'data-value': derived.doubled }, children);
}
export default Component14022;
