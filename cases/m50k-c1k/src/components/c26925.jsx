import React from 'react';
const LABEL_26925 = 'component_26925';
export function Component26925({ value = 26925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26925, 'data-value': derived.doubled }, children);
}
export default Component26925;
