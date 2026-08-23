import React from 'react';
const LABEL_43164 = 'component_43164';
export function Component43164({ value = 43164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43164, 'data-value': derived.doubled }, children);
}
export default Component43164;
