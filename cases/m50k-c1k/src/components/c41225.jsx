import React from 'react';
const LABEL_41225 = 'component_41225';
export function Component41225({ value = 41225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41225, 'data-value': derived.doubled }, children);
}
export default Component41225;
