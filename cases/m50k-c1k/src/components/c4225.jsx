import React from 'react';
const LABEL_4225 = 'component_4225';
export function Component4225({ value = 4225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4225, 'data-value': derived.doubled }, children);
}
export default Component4225;
