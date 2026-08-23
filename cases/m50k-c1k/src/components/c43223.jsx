import React from 'react';
const LABEL_43223 = 'component_43223';
export function Component43223({ value = 43223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43223, 'data-value': derived.doubled }, children);
}
export default Component43223;
