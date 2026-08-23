import React from 'react';
const LABEL_26022 = 'component_26022';
export function Component26022({ value = 26022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26022, 'data-value': derived.doubled }, children);
}
export default Component26022;
