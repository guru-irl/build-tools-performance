import React from 'react';
const LABEL_43512 = 'component_43512';
export function Component43512({ value = 43512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43512, 'data-value': derived.doubled }, children);
}
export default Component43512;
