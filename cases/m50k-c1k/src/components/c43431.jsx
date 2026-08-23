import React from 'react';
const LABEL_43431 = 'component_43431';
export function Component43431({ value = 43431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43431, 'data-value': derived.doubled }, children);
}
export default Component43431;
