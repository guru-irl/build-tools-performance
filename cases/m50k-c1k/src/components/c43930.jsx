import React from 'react';
const LABEL_43930 = 'component_43930';
export function Component43930({ value = 43930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43930, 'data-value': derived.doubled }, children);
}
export default Component43930;
