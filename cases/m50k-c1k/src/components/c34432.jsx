import React from 'react';
const LABEL_34432 = 'component_34432';
export function Component34432({ value = 34432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34432, 'data-value': derived.doubled }, children);
}
export default Component34432;
