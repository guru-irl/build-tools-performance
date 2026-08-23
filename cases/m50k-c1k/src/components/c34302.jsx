import React from 'react';
const LABEL_34302 = 'component_34302';
export function Component34302({ value = 34302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34302, 'data-value': derived.doubled }, children);
}
export default Component34302;
