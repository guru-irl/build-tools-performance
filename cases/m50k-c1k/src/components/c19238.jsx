import React from 'react';
const LABEL_19238 = 'component_19238';
export function Component19238({ value = 19238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19238, 'data-value': derived.doubled }, children);
}
export default Component19238;
