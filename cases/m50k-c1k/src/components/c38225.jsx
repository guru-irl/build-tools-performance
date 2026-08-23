import React from 'react';
const LABEL_38225 = 'component_38225';
export function Component38225({ value = 38225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38225, 'data-value': derived.doubled }, children);
}
export default Component38225;
