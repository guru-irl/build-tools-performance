import React from 'react';
const LABEL_30225 = 'component_30225';
export function Component30225({ value = 30225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30225, 'data-value': derived.doubled }, children);
}
export default Component30225;
