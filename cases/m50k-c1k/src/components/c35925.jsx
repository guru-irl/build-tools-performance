import React from 'react';
const LABEL_35925 = 'component_35925';
export function Component35925({ value = 35925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35925, 'data-value': derived.doubled }, children);
}
export default Component35925;
