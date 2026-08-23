import React from 'react';
const LABEL_43016 = 'component_43016';
export function Component43016({ value = 43016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43016, 'data-value': derived.doubled }, children);
}
export default Component43016;
