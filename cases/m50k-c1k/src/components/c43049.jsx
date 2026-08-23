import React from 'react';
const LABEL_43049 = 'component_43049';
export function Component43049({ value = 43049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43049, 'data-value': derived.doubled }, children);
}
export default Component43049;
