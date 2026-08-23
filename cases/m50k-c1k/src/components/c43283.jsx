import React from 'react';
const LABEL_43283 = 'component_43283';
export function Component43283({ value = 43283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43283, 'data-value': derived.doubled }, children);
}
export default Component43283;
