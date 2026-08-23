import React from 'react';
const LABEL_8288 = 'component_8288';
export function Component8288({ value = 8288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8288, 'data-value': derived.doubled }, children);
}
export default Component8288;
