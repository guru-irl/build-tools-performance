import React from 'react';
const LABEL_43460 = 'component_43460';
export function Component43460({ value = 43460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43460, 'data-value': derived.doubled }, children);
}
export default Component43460;
