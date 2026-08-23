import React from 'react';
const LABEL_16925 = 'component_16925';
export function Component16925({ value = 16925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16925, 'data-value': derived.doubled }, children);
}
export default Component16925;
