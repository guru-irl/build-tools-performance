import React from 'react';
const LABEL_43983 = 'component_43983';
export function Component43983({ value = 43983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43983, 'data-value': derived.doubled }, children);
}
export default Component43983;
