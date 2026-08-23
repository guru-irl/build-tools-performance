import React from 'react';
const LABEL_26225 = 'component_26225';
export function Component26225({ value = 26225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26225, 'data-value': derived.doubled }, children);
}
export default Component26225;
