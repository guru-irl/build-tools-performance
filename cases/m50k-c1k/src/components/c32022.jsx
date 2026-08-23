import React from 'react';
const LABEL_32022 = 'component_32022';
export function Component32022({ value = 32022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32022, 'data-value': derived.doubled }, children);
}
export default Component32022;
