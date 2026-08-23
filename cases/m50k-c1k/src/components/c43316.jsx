import React from 'react';
const LABEL_43316 = 'component_43316';
export function Component43316({ value = 43316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43316, 'data-value': derived.doubled }, children);
}
export default Component43316;
