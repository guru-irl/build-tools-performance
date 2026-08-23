import React from 'react';
const LABEL_43141 = 'component_43141';
export function Component43141({ value = 43141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43141, 'data-value': derived.doubled }, children);
}
export default Component43141;
