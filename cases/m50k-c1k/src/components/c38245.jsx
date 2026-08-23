import React from 'react';
const LABEL_38245 = 'component_38245';
export function Component38245({ value = 38245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38245, 'data-value': derived.doubled }, children);
}
export default Component38245;
