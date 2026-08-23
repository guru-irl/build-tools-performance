import React from 'react';
const LABEL_43035 = 'component_43035';
export function Component43035({ value = 43035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43035, 'data-value': derived.doubled }, children);
}
export default Component43035;
