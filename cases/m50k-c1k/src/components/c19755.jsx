import React from 'react';
const LABEL_19755 = 'component_19755';
export function Component19755({ value = 19755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19755, 'data-value': derived.doubled }, children);
}
export default Component19755;
