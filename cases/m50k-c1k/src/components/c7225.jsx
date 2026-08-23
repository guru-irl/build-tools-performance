import React from 'react';
const LABEL_7225 = 'component_7225';
export function Component7225({ value = 7225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7225, 'data-value': derived.doubled }, children);
}
export default Component7225;
