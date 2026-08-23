import React from 'react';
const LABEL_43935 = 'component_43935';
export function Component43935({ value = 43935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43935, 'data-value': derived.doubled }, children);
}
export default Component43935;
