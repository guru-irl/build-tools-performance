import React from 'react';
const LABEL_43042 = 'component_43042';
export function Component43042({ value = 43042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43042, 'data-value': derived.doubled }, children);
}
export default Component43042;
